const canvacord = require("canvacord");
const { MessageAttachment } = require('discord.js')
module.exports = {
  name: "wanted",
  description: "Wanted by the police!",
  category: "image",
  aliases: [],
  usage: "$wanted @user",
  run: async(client, message, args) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png' })
    if(!avatar) return message.reply("Error occured, try again!")
    let image = await canvacord.Canvas.wanted(avatar)
    let attachment = new MessageAttachment(image, "wanted.png");
    return message.channel.send(attachment);
  }
}