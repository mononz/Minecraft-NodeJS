var spawn = require('child_process').spawn,
    app = require('express')();

app.use(require('body-parser').urlencoded({
    extended:false
}));

var minecraftServerProcess = spawn('java', [
    '-Xmx512M',
    '-Xms256M',
    '-jar',
    'minecraft_server.1.8.jar',
    'nogui'
]);

function log(data) {
    process.stdout.write(data.toString());
}

minecraftServerProcess.stdout.on('data', log);
minecraftServerProcess.stderr.on('data', log);

// allow get/post requests
app.get('/command', function(request, response) {
    var command = request.param('Body');
    minecraftServerProcess.stdin.write(command+'\n');

    var buffer = [];
    var collector = function(data) {
        data = data.toString();
        buffer.push(data.split(']: ')[1]);
    };
    minecraftServerProcess.stdout.on('data', collector);
    setTimeout(function() {
        minecraftServerProcess.stdout.removeListener('data', collector);
        response.send(buffer.join(''));
    }, 250);
});

app.listen(3000);
