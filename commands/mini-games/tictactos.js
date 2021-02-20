const tictactoe = require('../../tictactoe/tictactoe.js')
module.exports = {
  name: "tictactoe",
  description: "Play a game of tic-tac-toe with someone!",
  category: "mini-games",
  aliases: ["ttt"],
  usage: "$ttt @user",
  run: async(client, message, args) => {
    const opponent = message.mentions.members.first()
    if(!opponent) return message.reply("Tic-Tac-Toe is a 2 player game, Mention somone to play with :facepalm:!")
    var game = new tictactoe({
      message: message,
      player_two : opponent
    })
  }
}