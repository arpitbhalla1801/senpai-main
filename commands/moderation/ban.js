const discord = require('discord.js')
module.exports = { 
    name: "ban",
    aliases: [],
    category: "moderation",
    usage: "$ban @user <reason>",
    authorPermission: ["BAN_MEMBERS"],
    botPermission: ["BAN_MEMBERS"],
    description: "Ban someone from the server!",
    run: async(client, message, args) => {
        let target = message.mentions.members.first()

        if(!target) return message.reply("Please mention someone to ban!")

        if(target.id === message.author.id) {
            return message.reply("You cannot kick yourself!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Please give a reason!")

        let embed = new discord.MessageEmbed()
        .setTitle("Member Banned")
        .addField("Target", target.user.tag)
        .addField("moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        await message.channel.send(embed)
        await target.ban({reason:reason})
    }
}