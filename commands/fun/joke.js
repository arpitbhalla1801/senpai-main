const { Commands } = require("discordjsbot-commands")
const commands = new Commands();
module.exports = {
  name: "joke",
  category: "fun",
  usage: "$joke",
  aliases: [""],
  description: "Gives you a random silly joke",
  run: async(client, message) => {
    let data = await commands.getJoke()
    message.channel.send(data)
  }
}