const Discord = require("discord.js");
module.exports = {
  name: "hit",
  description: "Hit someone.",
  category: "fun",
  run: async (client, message, args) => {
    const hit_list = [
      "https://media.tenor.com/images/5f2288a4a06ff4397af11290789c6b5b/tenor.gif",
      "https://media.tenor.com/images/93e023753fba6d0de0f1c1a982cb7685/tenor.gif",
      "https://media.tenor.com/images/8bd9449ce3328d921d1d9aa0b099e84b/tenor.gif",
      "https://media.tenor.com/images/8bd9449ce3328d921d1d9aa0b099e84b/tenor.gif"
    ];
    const index = Math.floor(Math.random() * (hit_list.length - 1) + 0);
    const target = message.mentions.users.first();
    if(!target) return message.channel.send("Mention a valid user")
    if (target.id === message.author.id)
      return message.channel.send("You cannot hit yourself. :face_palm:");
    let embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} **hit** <@${target.id}>`)
      .setImage(hit_list[index])
      .setTimestamp();
    message.channel.send(embed);
  }
};