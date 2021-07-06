const Discord = require('discord.js');
const config = require("../storage/config.json");

exports.run = async(client, message, args) => {

    const helpEmbed = new Discord.MessageEmbed();
    helpEmbed.setColor('#2F3136');
    helpEmbed.setTitle("Versa Proxy Help");
    helpEmbed.setDescription(`Current avalible commands!\n\n**Defualt Commands:**\n\`${config.prefix}http\` - Sends http proxies in dms\n\`${config.prefix}socks4\` - Sends socks4 proxies in dms\n\`${config.prefix}socks5\` - Sends socks5 proxies in dms\n\n**Premium Commands:\n\`Comming Soon :D\`**`);

    message.channel.send(helpEmbed);
}

exports.help = {
  name: 'help',
  aliases: [''],
} 