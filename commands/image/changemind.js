const canvacord = require("canvacord");
const { MessageAttachment } = require('discord.js')
module.exports = {
  name: "changemymind",
  description: "Change my mind!",
  category: "image",
  usage: "$changemymind <text>",
  aliases: ["cmm"],
  run: async(client, message, args) => {
    let text = args.join(' ')
    let image = await canvacord.Canvas.changemymind(text)
    let attachment = new MessageAttachment(image, "change.png");
    return message.channel.send(attachment);
  }
}