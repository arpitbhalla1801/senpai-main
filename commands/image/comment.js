const canvacord = require("canvacord");
const { MessageAttachment } = require('discord.js')
module.exports = {
  name: "comment",
  description: "Comment something on youtube!",
  usage: "$youtube <text>",
  category: "image",
  aliases: ["ytcomment"],
  run: async(client, message, args) => {
    let image = await canvacord.Canvas.youtube({
      username: message.author.username,
      content: args.join(" "),
      avatar: message.author.displayAvatarURL({ dynamic: false, format: 'png' }),
      dark: false
    })
    let attachment = new MessageAttachment(image, "youtube.png");
    return message.channel.send(attachment);
  }
}