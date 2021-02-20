const Discord = require("discord.js")
module.exports = {
  name: "kiss",
  description: "Kiss someone!",
  category: "fun",
  run: async(client, message, args) => {
  const kiss_list = [
    "https://media.tenor.com/images/0136ddedea728ae27df8fbcd19d680f5/tenor.gif",
    "https://media.tenor.com/images/6a4646c94c80270fe3a4da3d47e7b614/tenor.gif",
    "https://media.tenor.com/images/e11e607335c7e9e265d4dbbdbb2bfdf5/tenor.gif",
    "https://media.tenor.com/images/605aeeed61e38a52870c1dfdb6db9a87/tenor.gif"
  ]
  const index = Math.floor(Math.random() * (kiss_list.length - 1) + 0)
  const target = message.mentions.users.first()
  if(!target) return message.channel.send("Mention a valid user")
  if (target.id === message.author.id)
      return message.channel.send("How can you kiss yourself ?! :face_palm:");
  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.author} **kissed** <@${target.id}>`)
  .setImage(kiss_list[index])
  .setTimestamp()
  message.channel.send(embed)
}
}