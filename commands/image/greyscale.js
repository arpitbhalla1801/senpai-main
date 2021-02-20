const canvacord = require("canvacord");
const { MessageAttachment } = require('discord.js')
module.exports = {
  name: "greyscale",
  description: "Converts an avatar into greyscale!",
  usage: "$greyscale <user>",
  category: "image",
  aliases: [],
  run: async(client, message, args) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png' })
    if(!avatar) return message.reply("Error occured, try again!")
    let image = await canvacord.Canvas.greyscale(avatar)
    let attachment = new MessageAttachment(image, "greyscale.png");
    return message.channel.send(attachment);
  }
}