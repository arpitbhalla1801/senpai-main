const Discord = require("discord.js")
module.exports = {
  name: "flip",
  aliases: ["coinflip"],
  category: "fun",
  description: "Flips a coin for you!",
  run: async(client, message) => {
    const flip = [
      "heads",
      "tails",
      "heads",
      "tails",
      "heads",
      "tails",
			"tails"
    ]
    let response =
        flip[Math.floor(Math.random() * flip.length)];
    let Embed = new Discord.MessageEmbed()
        .setTitle(`Coin Flip`)
        .setDescription(`**${response}**`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
  }
}