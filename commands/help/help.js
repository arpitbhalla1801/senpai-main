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
      const len_commands = commands.array().length
      let emx = new MessageEmbed()
      .setDescription("This is the help menu for the bot, type `$help <cmd_name>` for more info on any specific command. Use the reactions to navigate.")
      .addField("😁 Fun", "Commands which are fun to use!")
      .addField("🎮 Mini-Games", "Mini-games to have fun!")
      .addField("🚓 Moderation", "Moderation commands help to keep your server in order!")
      .addField("📷 Image", "Some image manipulation commands!")
      .addField("🐶 Animals", "Some animal related commands!")
      .addField("🧮 Utility", "Some basic utility commands!")
      .addField("ℹ Info", "Some info commands!", true)
      .addField("⚙ Config", "Per server config commands!", true)
      .setColor("GREEN")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`Currently the bot has ${len_commands} commands!`)

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }
      let fun = new MessageEmbed()
      .setFooter(`Page 1 of 8`)
      let games = new MessageEmbed()
      .setFooter(`Page 2 of 8`)
      let moderation = new MessageEmbed()
      .setFooter(`Page 3 of 8`)
      let image = new MessageEmbed()
      .setFooter(`Page 4 of 8`)
      let animals = new MessageEmbed()
      .setFooter(`Page 5 of 8`)
      let utility = new MessageEmbed()
      .setFooter(`Page 6 of 8`)
      let info = new MessageEmbed()
      .setFooter(`Page 7 of 8`)
      let config = new MessageEmbed()
      .setFooter(`Page 8 of 8`)
      //console.log(com)
      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";
        if(category === "fun") {
          fun.addField(`😁 ${category.toUpperCase()}\t|\t${value.length}`, desc)
        }
        if(category === "utility") {
          utility.addField(`🧮 ${category.toUpperCase()}\t|\t${value.length}`, desc)
        }
        if(category === "mini-games") {
          games.addField(`🎮 ${category.toUpperCase()}\t|\t${value.length}`, desc)
        }
        if(category === "info") {
         info.addField(`ℹ ${category.toUpperCase()}\t|\t${value.length}`, desc)
        }
        if(category === "config") {
         config.addField(`⚙ ${category.toUpperCase()}\t|\t${value.length}`, desc)
        }
        if(category === "image") {
         image.addField(`📷 ${category.toUpperCase()}\t|\t${value.length}`, desc)
        }
        if(category === "moderation") {
         moderation.addField(`🚓 ${category.toUpperCase()}\t|\t${value.length}`, desc)
        }
        if(category === "animals") {
         animals.addField(`🐶 ${category.toUpperCase()}\t|\t${value.length}`, desc)
        }
        //emx.addField(`${category.toUpperCase()}\t|\t${value.length}`, desc);

      }

      let a = await message.channel.send(emx);
      await a.react("🏠")
      await a.react("😁")
      await a.react("🎮")
      await a.react("🚓")
      await a.react("📷")
      await a.react("🐶")
      await a.react("🧮")
      await a.react("ℹ")
      await a.react("⚙")
      setTimeout(function () {
        a.reactions.removeAll()
      }, 1000*60*5)
      const filter = (reaction, user) => user.id !== message.client.user.id && user.id == message.author.id;
    const collector = a.createReactionCollector(filter);
        collector.on("collect", (reaction, user) => {
        reaction.users.remove(user);
        switch (reaction.emoji.name) {
        case "🏠":
        a.edit(emx)
          break;
        case "😁":
        a.edit(fun)
          break;
        case "🧮":
            a.edit(utility)
          break;
        case "🎮":
            a.edit(games)
          break;
        case "📷":
            a.edit(image)
          break;
        case "⚙":
            a.edit(config)
          break;
        case "🚓":
            a.edit(moderation)
          break;
        case "🐶":
            a.edit(animals)
          break;
        case "ℹ":
            a.edit(info)
          break;
                  default:
          break;
        }
        })
    }
  }
};
function firstLetterUpper(theString) {
	var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
  return newString;
}