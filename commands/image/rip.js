const canvacord = require("canvacord");
const { MessageAttachment } = require('discord.js')
module.exports = {
  name: "rip",
  description: "RIP someone",
  usage: "$rip @user",
  aliases: [],
  category: "image",
  run: async(client, message, args) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png' })
    if(!avatar) return message.reply("Error occured, try again!")
    let image = await canvacord.Canvas.rip(avatar)
    let attachment = new MessageAttachment(image, "rip.png");
    return message.channel.send(attachment);
  }
}