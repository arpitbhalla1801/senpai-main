const { MessageEmbed } = require('discord.js')
module.exports = {
	name: "support",
	category: "info",
	description: "Get the link to the bot's support server",
	run: async(client, message, args) => {
		let embed = new MessageEmbed()
		.setDescription(`If you need any help using the bot, join the support server by clicking [here](https://discord.gg/kSW3bEj)`)

		await message.channel.send(embed)
	}
}