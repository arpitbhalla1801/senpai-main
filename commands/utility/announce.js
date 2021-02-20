const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "announce",
  category: "utility",
  aliases: [],
  usage: "$announce #channel_name <announce_message>",
  description: "Announce something in the mentioned channel!",
  authorPermission: ["MANAGE_SERVER"],
  botPermission: ["MANAGE_SERVER"],
  run: async(client, message, args) => {
    const channel = message.mentions.channels.first()
    if(!channel) return message.reply("Please mention a valid channel!")
    const saymsg = args.slice(1).join(" ")
    if(!saymsg) return message.reply("Please give your message!")
    let embed = new MessageEmbed()
    .setDescription(`**${saymsg}**`)
    .setFooter(message.author.username, message.author.displayAvatarURL())
    await message.channel.send(embed)
  }
}