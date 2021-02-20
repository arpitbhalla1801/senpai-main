const discord = require("discord.js")
module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "utility",
  description: "Get a user's avatar",
  usage: "$avatar <user>",
  run: async(client, message, args) => {
    const user = message.mentions.users.first() || message.author || message.member
    let embed = new discord.MessageEmbed()
    .setDescription("Here's the avatar")
    .setImage(client.users.cache.get(user.id).displayAvatarURL())
    message.channel.send(embed)
  }
}