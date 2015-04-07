Minecraft NodeJS
================

A NodeJS script to load a minecraft server and allow it to be controlled via get or post requests.

####Instructions:
SSH into our server
```bash
    ssh root@ipaddress
```
Create a user
```bash
    adduser yournewuser // new user
    visudo
```
add in the lines appropriately
```bash
    root ALL=(ALL:ALL) ALL
    yournewuser ALL=(ALL:ALL) ALL
```
close terminal and ssh in with the new user
``` bash
    ssh yournewuser@ipaddress
```
install git and clone repo the repo
``` bash
    sudo apt-get install git
    git clone https://github.com/mononz/Minecraft-NodeJS.git
```
install java and download minecraft
``` bash
    sudo apt-get install default-jdk // install jdk
    java -version // check it is installed
    wget https://s3.amazonaws.com/Minecraft.Download/versions/1.8.3/minecraft_server.1.8.3.jar // download minecraft server
```
run server and 
``` bash
    java -Xmx512M -Xms256M -jar minecraft_server.1.8.3.jar nogui // run server
    nano eula.txt // accept the eula
    java -Xmx512M -Xms256M -jar minecraft_server.1.8.3.jar nogui // run server again
```
if everything is good, we can proceed :)

we need nodejs and pm2
``` bash
    sudo apt-get install nodejs
    sudo apt-get install npm
    sudo npm install -g pm2
```
now that nodejs is installed and our node process manager is installed we can get started on starting the server using node
``` bash
    npm install
    pm2 start app.js
```
the minecraft server should be running now. Monitor the script and logs using
``` bash
    pm2 list 
    // and
    pm2 logs
```

In a browser open up: http://your.ip.address:3000/command?Body=/help or http://your.ip.address:3000/command?Body=/list and see the output.


Start hacking and enjoy your minecraft server :)