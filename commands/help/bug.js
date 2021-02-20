const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "bugreport",
    description: "Use this cmd to report a bug in the bot!",
    category: "info",
    usage: "$bugreport <bug>",
    aliases: [],
    run: async(client, message, args) => {
        let embed = new MessageEmbed()
        .addField("Author name & tag", message.author.tag)
        .setDescription(`**${args.join(" ")}**`)
        .setFooter(message.author.id)
        const channel = await client.channels.cache.find(u => u.id === '809019215210086490')
        if(!channel) return message.reply("Error occurred")
        channel.send(embed)
        message.reply("Successfully sent your bug-report!")
    }
}