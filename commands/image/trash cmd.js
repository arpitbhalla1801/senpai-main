const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "trash",
  description: "Trash the mentioned user or even yourself!",
  category: "image",
  usage: "$trash @user",
  aliases: [],
  run: async(client, message, args) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    const url = `https://api.no-api-key.com/api/v1/trash?image=${user.user.displayAvatarURL(
      { format: "png" }
    )}`;

    let response, data;
    try {
      response = await axios.get(url);
      data = response.data;
    } catch (e) {
      return message.channel.send(`An error occured!`);
    }

    const embed = new MessageEmbed()
      .setTitle("Trash!")
      .setImage(data.url)
      .setColor("RANDOM")
      .setFooter(
        `${message.author.username} asked this`,
        message.author.displayAvatarURL({ dynamic: true })
      );

    await message.channel.send(embed);
  }
}