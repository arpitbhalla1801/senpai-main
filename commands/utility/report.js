const reportSchema = require('../../schemas/config')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "report",
  description: "Report someone by using their id with a reason!",
  category: "utility",
  usage: "$report <user_id> <reason>",
  aliases: [],
  run: async(client, message, args) => {
    let member = await message.guild.members.fetch(args[0])
    let reason = args.slice(1).join(" ")
    if(!member) return message.reply("Please give a valid user id!")
    if(!reason) return message.reply("Please give a reason for the report!")
    let channel;
    reportSchema.findOne({
      Guild: message.guild.id
    }, async(err, data) => {
      if(!data || !data.Rchannel) {
        return message.reply("No report channel found!")
      } else {
        channel = data.Rchannel
        console.log(channel)
        let embed = new MessageEmbed()
        .setTitle("Report!")
        .addField("Reason",reason)
        .addField("Reported user",`${member.user.tag}-${member}`)
        .addField("Reported by",`${message.author.tag}-${message.author}`)
        await message.guild.channels.cache.get(channel).send(embed)
      }
    })
  }
}