const canvacord = require("canvacord");
const { MessageAttachment } = require('discord.js')
module.exports = {
  name: "rainbow",
  description: "Converts an avatar into rainbow avatar!",
  usage: "$rainbow <user>",
  category: "image",
  aliases: [],
  run: async(client, message, args) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png' })
    if(!avatar) return message.reply("Error occured, try again!")
    let image = await canvacord.Canvas.rainbow(avatar)
    let attachment = new MessageAttachment(image, "rainbow.png");
    return message.channel.send(attachment);
  }
}