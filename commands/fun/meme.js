const { Commands } = require("discordjsbot-commands")
const commands = new Commands();
module.exports = {
  name: "meme",
  category: "fun",
  description: "Gets you a meme!",
  run: async(client, message, args) => {
    let data = await commands.getMeme()
    message.channel.send(data)
  }
}