const Discord = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
  name: "iphone",
  description: "View someone in an Iphone!",
  aliases: [],
  usage: "$iphone <user>",
  category: "image",
  run: async(client, message, args) => {
        let mention = message.mentions.members.first() || message.member || client.users.cache.fetch(u => u.id === args[0])
        if (!mention) {
            message.channel.send("⚠ Please mention someone")
        }
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=iphonex&url=${mention.user.displayAvatarURL({ size: 1024 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "iphonex.png");
            await message.channel.send(attachment);
        } catch (e) {
            message.channel.send("⚠ Error, Try Again!");
        }
  }
}