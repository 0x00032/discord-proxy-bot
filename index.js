const Discord = require("discord.js");
const fs = require('fs-extra');
const { fetchAll } = require("quick.db");
const config = require("./src/storage/config.json");

const client = new Discord.Client({fetchAllMembers: true}); //make sure to enable client intents or bot will not start!

//event handling
fs.readdir("./src/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
      const event = require(`./src/events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

  //command collectors
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

//command handling
fs.readdir("./src/commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      let cmd = require(`./src/commands/${file}`);
      let cmdFileName = file.split(".")[0];
      client.commands.set(cmd.help.name, cmd);
      if (cmd.help.aliases) {
        cmd.help.aliases.forEach(alias => {
          client.aliases.set(alias, cmd.help.name);
        });
      };
    });
  });

  //bot login
  client.login(config.token);