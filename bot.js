const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTc2NDcyOTY0NzU3NzE2OTkz.XNbX3g.mEfbfMEzd2SfZq6ZZY5XnZz4ArQ);//
