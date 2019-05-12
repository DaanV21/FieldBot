const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '/';

client.on('ready', () => {
    console.log('Starting up.. Done');
});
   
client.on('message', message=>{
   
    let args = message.content.substring(PREFIX.length).split(" ");

switch(args[0]){
case 'info':
message.channel.sendMessage('**Er is momenteel geen informatie beschikbaar, probeer het later opnieuw.**')
break;
case 'website':
message.channel.sendMessage('**Dit commando is momenteel niet in gebruik.**')
    break;
case 'status':
message.channel.sendMessage('**De server status is momenteel: Online!**')
    break;
case 'clear':
    if(!args[1]) return message.reply('**Foutmelding: Geef aan hoeveel berichten er moeten worden verwijderd.**')
    message.channel.bulkDelete(args[1]);
    break;
    }
});
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
