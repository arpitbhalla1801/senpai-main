const Discord = require("discord.js")
module.exports = {
  name: "lick",
  description: "Lick someone!",
  category: "fun",
  aliases: [],
  usage: "$lick <user>",
  run: async (client, message, args) => {
    const lick_list = [
      "https://i.pinimg.com/originals/6a/22/13/6a22135cdc8f3d20072bffa073be9e6c.gif",
      "https://thumbs.gfycat.com/BestBlueGalapagosalbatross-size_restricted.gif"
    ]
    const index = Math.floor(Math.random() * (lick_list.length - 1) + 0);
    const target = message.mentions.users.first();
    if(!target) return message.channel.send("Mention a valid user")
    if (target.id === message.author.id)
      return message.channel.send("You cannot lick yourself. :face_palm:");
    let embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} **licked** <@${target.id}>`)
      .setImage(lick_list[index])
      .setTimestamp();
    message.channel.send(embed);
  }
}