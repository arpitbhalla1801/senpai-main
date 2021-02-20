const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "lock",
  description: "Locks a channel for a given role!",
  usage: "$lock #channel <role_id>",
  aliases: [],
  category: "moderation",
  authorPermission: ["MANAGE_CHANNELS"],
  botPermission: ["MANAGE_CHANNELS"],
  run: async(client, message, args) => {
    const channel = message.mentions.channels.first()
    if(!channel) return message.reply("Specify the channel to lock!")
    const role_1 = args.slice(1).join(" ")
    const role = message.guild.roles.cache.find(r => r.id === role_1)
    if(!role) return message.reply("Could not find the role!")
    channel.updateOverwrite(role, {
                    SEND_MESSAGES: false
                })
    let embed = new MessageEmbed()
    .setTitle("Channel Locked!")
    .setDescription(`This channel has been locked by ${message.author.tag}`)
    message.channel.send(embed)
  }
}