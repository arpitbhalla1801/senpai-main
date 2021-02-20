const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "howgay",
    category: "fun",
    description: "Shows how much gay a person is!",
    run: async (client, message, args) => {

        //Start

        let Member = message.mentions.users.first() || message.guild.member(args[0]) || message.author;

		let Result = Math.floor(Math.random() * 101);

        let embed = new MessageEmbed()
        .setColor("BLURPLE")
        .setTitle(`Gay v2 Machine`)
        .setDescription(`${Member.username} Is ${Result}% Gay 🏳️‍🌈`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();

        message.channel.send(embed);

        //End

    }
};