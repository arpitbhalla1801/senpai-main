const discord = require('discord.js')
module.exports = { 
    name: "kick",
    category: "moderation",
    usage: "$kick @user <reason>",
    aliases: [],
    authorPermission: ["KICK_MEMBERS"],
    botPermission: ["KICK_MEMBERS"],
    description: "Kick someone from the server!",
    run: async(client, message, args) => {
        let target = message.mentions.members.first()

        if(!target) return message.reply("Please mention someone to kick!")

        if(target.id === message.author.id) {
            return message.reply("You cannot kick yourself!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Please give a reason!")

        await target.kick(reason)
        await message.channel.send(`Successfully kicked **${target.user.tag}**`)
    }
}