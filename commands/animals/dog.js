const { Commands } = require("discordjsbot-commands")
const commands = new Commands();
module.exports = {
  name: "dog",
  description: "Gives you a random dog image with a fact!",
  usage: "$dog",
  aliases: [],
  category: "animals",
  run: async(client, message, args) => {
    let data = await commands.getDog();    
    message.channel.send(data);
  }
}