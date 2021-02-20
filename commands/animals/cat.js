const { Commands } = require("discordjsbot-commands")
const commands = new Commands();
module.exports = {
  name: "cat",
  description: "Gives you a random cat image with a fact!",
  usage: "$cat",
  aliases: [],
  category: "animals",
  run: async(client, message, args) => {
    let data = await commands.getCat();    
    message.channel.send(data);
  }
}