const HangmanGame = require('../../hangman.js')
const client = require('../../index.js')
const hangman = new HangmanGame(client)
module.exports = {
  name: "hangman",
  description: "Play a game of hangman, Guess the right word to win!",
  usage: "$hangman",
  aliases: [],
  category: "mini-games",
  run: async(client, message, args) => {
    hangman.newGame(message);
  }
}