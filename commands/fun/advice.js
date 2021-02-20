const { Commands } = require("discordjsbot-commands")
const commands = new Commands();
module.exports = {
  name: "advice",
  category: "fun",
  description: "Gives you an advice, take it or ignore it",
  run: async(message) => {
    let data = await commands.getAdvice()
    message.channel.send(data)
  }
}