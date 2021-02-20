const { MessageEmbed } = require("discord.js");
const schannel = require("../../schemas/config");
module.exports = {
  name: "accept",
  description: "Marks a suggestion as accepted!",
  category: "suggestions",
  authorPermission: ["MANAGE_MESSAGES"],
  usage: "$accept <msg_id>",
  aliases: [],
  run: async (client, message, args) => {
    schannel.findOne(
      {
        Guild: message.guild.id,
      },
      async (err, data) => {
        if (err) throw err;
        if (data) {
          const channel = message.guild.channels.cache.find(
            (x) => x.id === data.Schannel
          );
          const msg = await channel.messages.fetch(`${args}`);
          if (!msg)
            return message.channel.send("Suggestion not found, Try again!");
          console.log(msg.embeds[0]);
          const user = await client.users.cache.find(
            (u) => u.id === `${msg.embeds[0].footer.text}`
          );
          if (!user)
            return message.channel.send(
              "Suggestion author could not be found!"
            );
          let embed = new MessageEmbed()
            .setAuthor(msg.embeds[0].author.name, msg.embeds[0].author.iconURL)
            .setDescription(`**${msg.embeds[0].description}**`)
            .addField("Status", `☑ Accepted`)
            .setColor("GREEN")
            .setFooter(msg.embeds[0].footer.text);
          await msg.edit(embed);
          await user.send(
            `Your suggestion has been accepted in ${message.guild.name}! Link - ${msg.url}`
          );
        }
      }
    );
  },
};
