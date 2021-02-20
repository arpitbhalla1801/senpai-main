const { MessageEmbed } = require("discord.js");
const ErrorMessage = `Error In Getting Information | Please Try Again Later!`;

module.exports = {
  name: "lmgtfy",
  aliases: ["google"],
  description: "Let Me Google That For You!",
  category: "utility",
  usage: "$google <search_term>",
  run: async (client, message, args) => {
    try {

     const Search = message.content
        .split(" ")
        .slice(1)
        .join("+")
        .toLowerCase();
    
      if (!Search) {
        message.channel.send(`Please Give Me Search Term!`);
      } else {
        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`[Click Me](https://lmgtfy.com/?q=${Search})`)
		  message.channel.send(embed)};

      await message.delete();
    } catch (error) {
      console.log(error);
      message.channel.send(
        new MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`${ErrorMessage}`)
          .setFooter(`Sorry For Error!`)
          .setTimestamp()
      );
    }
  }
}