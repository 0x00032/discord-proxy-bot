const Discord = require('discord.js');
const fs = require('fs-extra');
const got = require("got");

exports.run = async(client, message, args) => {

    message.delete()

    let checkDM = new Discord.MessageEmbed()
        .setTitle("Check your direct messages.")
        .setDescription("You must have dm's open to receive proxies!")
        .setFooter("VersaProxy - the best proxy bot around!")
        .setColor("#2F3136");

    got('https://api.proxyscrape.com/?request=displayproxies&proxytype=socks4&timeout=5000').then(response => {

        fs.writeFile('./src/storage/socks4.txt', response.body, function (err) {
            if (err) return console.log(err);
            console.log('\n\x1b[32m%s\x1b[0m', `$[INFO]: Wrote data to file socks4.txt`);
          });

    }).catch(console.error);

    message.author.send("**Here are your requested proxies!**", {
        files: [
          "./src/storage/socks4.txt",
        ]
      }).catch(console.error);

    message.channel.send(checkDM)
}

exports.help = {
  name: 'socks4',
  aliases: [''],
} 