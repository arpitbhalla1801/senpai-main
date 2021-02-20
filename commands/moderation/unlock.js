const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "unlock",
  description: "Unlocks a channel for a given role!",
  usage: "$unlock #channel <role_id>",
  aliases: [],
  category: "moderation",
  authorPermission: ["MANAGE_CHANNELS"],
  botPermission: ["MANAGE_CHANNELS"],
  run: async(client, message, args) => {
    const channel = message.mentions.channels.first()
    if(!channel) return message.reply("Specify the channel to unlock!")
    const role_1 = args.slice(1).join(" ")
    const role = message.guild.roles.cache.find(r => r.id === role_1)
    if(!role) return message.reply("Could not find the role!")
    channel.updateOverwrite(role, {
                    SEND_MESSAGES: true
                })
    let embed = new MessageEmbed()
    .setTitle("Channel Unlocked!")
    .setDescription(`This channel has been unlocked by ${message.author.tag}`)
    message.channel.send(embed)
  }
}