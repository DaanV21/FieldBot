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
    if(!args[1]) return message.reply('**Foutmelding: Geef aan hoeveel berichten u wilt verwijderen.**')
    message.channel.bulkDelete(args[1]);
    break;
    }
    
    switch(args[0]){
case 'serverinfo':
        const embed = new Discord.RichEmbed()
        .setTitle('Server Informatie')
        .addField('Server Naam', message.guild.name, true)
        .addField('Versie', version, true)
        .setColor(0x3498DB)
        .setThumbnail(message.author.avatarURL)
        .setFooter('Field © - 2019')
        message.channel.sendEmbed(embed);
break;
    
    }
    });
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
