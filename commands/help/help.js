const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Get all the bot's commands!",
  usage: "help <cmd>",
  aliases: ["commands"],
  category: "info",
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]))

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }
      let aliases = command.aliases
      if(aliases.length === 0) {
        aliases = "None"
      } else {
        aliases = "`" + aliases + "`"
      }
      let embed = new MessageEmbed()
        .setAuthor(firstLetterUpper(command.name) + " command")
        .addField("Description", "__" + command.description + "__" || "Not Provided", true)
        .addField("Aliases",aliases, true)
        .addField("Usage", "`" + command.usage + "`" || "Not Provided")
        .setColor("GREEN")
        .setFooter(`<> = required, [] = optional`,client.user.displayAvatarURL());
        //console.log(command.aliases)
        //console.log(command)
      return message.channel.send(embed);
    } else {
      const commands = await client.commands;
      const prefix = await client.prefix(message)
      let emx = new MessageEmbed()
        .setTitle("Help Menu")
        .setDescription("Use " + prefix + "help `cmd_name` to get info about any command!")
        .setColor("GREEN")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}\t|\t${value.length}`, desc);
      }

      return message.channel.send(emx);
    }
  }
};
function firstLetterUpper(theString) {
	var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
  return newString;
}