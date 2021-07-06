const Discord = require('discord.js');

exports.run = async(client, message, args) => {

  const msg = await message.channel.send(`🏓 Pinging....`);
  let pembed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("🏓 Pong!")
    .setThumbnail("https://cdn.discordapp.com/attachments/657562043343306762/844761351427457054/image0.png")
    .addField("**Latency**", `\`${Date.now() - message.createdTimestamp}ms\``)
    .addField("**API Latency**", `\`${Math.round(client.ws.ping)}ms\``)
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL());

   msg.edit(' ', pembed);
    console.log('\n\x1b[32m%s\x1b[0m', `$[INFO]: Command ping executed by ${message.author.tag}`);
}

exports.help = {
  name: 'ping',
  aliases: ['pong'],
} 