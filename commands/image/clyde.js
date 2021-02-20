const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'clyde',
  description: 'Get a custom clyde message!',
  category: 'image',
  usage: '$clyde <text>',
  aliases: [],
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send('What do you want clyde to say?');
    let clydeMessage = args.slice(0).join(' ');
    let encodedLink = encodeURI(`https://ctk-api.herokuapp.com/clyde/${clydeMessage}`);
    const clydeEmbed = new MessageEmbed()
      .setTitle('Clyde!')
      .setImage(encodedLink);

    message.channel.send(clydeEmbed)
  }
}