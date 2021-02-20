const { MessageEmbed } = require("discord.js");
const schannel = require("../../schemas/config");
module.exports = {
  name: "suggest",
  description: "Suggest something good!",
  category: "suggestions",
  usage: "$suggest <suggestion_msg>",
  aliases: [],
  run: async (client, message, args) => {
    let channel;
    schannel.findOne(
      {
        Guild: message.guild.id,
      },
      async (err, data) => {
        if (err) throw err;
        channel = data.Schannel;
        //console.log(channel)
        const schannel = message.guild.channels.cache.find(
          (x) => x.id === channel
        );
        if (schannel) {
          const suggestion = args.join(" ");
          if (!suggestion) return message.reply("Please suggest something.");

          let embed = new MessageEmbed()
            .setAuthor(
              `${message.author.tag}`,
              message.author.displayAvatarURL()
            )
            .setDescription(`**${suggestion}**`)
            .setColor("YELLOW")
            .addField("Status", `:bar_chart: Being voted!`)
            .setFooter(message.author.id);
          let sent = await schannel.send(embed);
          await sent.react("👍");
          await sent.react("👎");
          const user = message.member;
          let embed2 = new MessageEmbed()
            .setTitle("Suggestion submitted!")
            .setDescription(
              "Your suggestion has been submitted.\nThankyou for submitting a suggestion."
            )
            .addField(
              "Link - ",
              `[Click here!](https://discord.com/channels/${message.guild.id}/${channel}/${sent.id})`
            );
          user.send(embed2);
        } else {
          return message.reply("Could not find the suggestions channel! Oops!");
        }
      }
    );
  },
};
