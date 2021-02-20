const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "addrole",
  aliases: ["ar"],
  category: "moderation",
  usage: "addrole @user <role_name> or <role_id>",
  description: "Adds a role to a user",
  authorPermission: ["MANAGE_ROLES"],
  botPermission: ["MANAGE_ROLES"],
  run: async(client, message, args) => {
    const user = message.mentions.members.first();
    if(!user) {
      return message.channel.send(`**${message.author.username}**, Please mention a user.`)
    }
    
    if(user.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, You can not change roles for yourself !`)
    }
    let role = args.slice(1).join(" ")
    
    if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Please give a valid role!`)
    }
    const role1 = message.guild.roles.cache.find((r) => r.name === `${role}`) || message.guild.roles.cache.find((r) => r.id === `${role}`)
    user.roles.add(role1)
    
    const embed = new MessageEmbed()
    .setDescription(`<@&${role1.id}> has been added to ${user}`)
    message.channel.send(embed)
  }
}