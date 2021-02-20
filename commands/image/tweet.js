const Discord = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
    name: "tweet",
    category: "image",
    usage: "$tweet <text>",
    aliases: [],
    description: "Tweet something as yourself!",
    run: async(client, message, args) => {
    if (!args.length) return message.channel.send('You need to include text to tweet!');
    fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
      .then((res) => res.json())
      .then((body) => {
        let embed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Tweeted something!`)
          .setImage(body.message)
          .setColor("RANDOM")
          .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());
        message.channel.send(embed);
      });
}
}