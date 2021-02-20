const Discord = require("discord.js")
module.exports = {
  name: "hug",
  category: "fun",
  description: "Hug someone affectionately!",
	run: async(client, message, args) => {
  const hug_list = [
    "https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif",
    "https://media.tenor.com/images/9b620e36872db80072f07e987f63bd39/tenor.gif",
    "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
    "https://thumbs.gfycat.com/FrenchShimmeringAmericanmarten-size_restricted.gif"
  ]
  const index = Math.floor(Math.random() * (hug_list.length - 1) + 0)
  const target = message.mentions.users.first()
  if(!target) return message.channel.send("Mention a valid user")
  if (target.id === message.author.id)
      return message.channel.send("How can you hug yourself ?! :face_palm:");
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.author} **hugged** <@${target.id}>`)
  .setImage(hug_list[index])
  .setTimestamp()
  message.channel.send(embed)
}
}