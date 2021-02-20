const words = [
    "car",
    "bat",
    "volleyball",
    "bridge",
    "educate",
    "enchanting",
    "live",
    "agree",
    "youtube",
    "bowl",
    "cricket",
    "soccer",
    "difficult",
    "medicine", 
    "situation", 
    "hall", 
    "desk", 
    "hotel", 
    "president", 
    "thought"
  ]
const games = {}
const discord = require('discord.js')
const stages = {
  STARTING: (counter) => {
    return `A **__type-to-win__** game is starting in ${counter}s!`
  },
  IN_GAME: (word) => {
    let spacedWord = ''

    for (const character of [...word]) {
      spacedWord += character
      spacedWord += ' '
    }

    return `The new word is **${spacedWord}**`
  },
  ENDING: (points) => {
    const sorted = Object.keys(points).sort((a, b) => {
      return points[b] - points[a]
    })

    let results = ''

    for (const key of sorted) {
      const amount = points[key]
      
      results += `**<@${key}> had ${amount} point${amount === 1 ? '' : 's'}**\n`
      
    }
      let embed = new discord.MessageEmbed()
      .setTitle("Game Over")

      .setDescription(`__Results__ - \n${results}`)
    return embed
  },
}

const selectWord = (game) => {
  game.currentWord =
    game.remainingWords[Math.floor(Math.random() * game.remainingWords.length)]

  const index = game.remainingWords.indexOf(game.currentWord)
  game.remainingWords.splice(index, 1)
}

const gameLoop = () => {
  for (const key in games) {
    const game = games[key]
    const { message, stage } = game

    if (stage === 'STARTING') {
      let string = stages[stage](game.counter)
      message.edit(string)

      if (game.counter <= 0) {
        game.stage = 'IN_GAME'
        game.counter = 60

        selectWord(game)

        string = stages[game.stage](game.currentWord)
        message.edit(string)
      }
    } else if (stage === 'IN_GAME') {
      if (game.counter <= 0) {
        game.stage = 'ENDING'

        const string = stages[game.stage](game.points)
        message.edit(string)
        // Delete the game
        delete games[key]

        continue
      }
    }

    --game.counter
  }

  setTimeout(gameLoop, 1000)
}
module.exports = {
  name: "word-game",
  category: "mini-games",
  aliases: ["type-game"],
  description: "Play a word-game and type faster to win!",
  usage: "$word-game",
	run: async(client, message, args) => {
		client.on('message', (message) => {
      const { channel, content, member } = message
      const { id } = channel

      const game = games[id]

      if (game && game.currentWord && !member.user.bot) {
        message.delete()

        if (
          game.stage === 'IN_GAME' &&
          content.toLowerCase() === game.currentWord.toLowerCase()
        ) {
          game.currentWord = null
          const seconds = 2

          const { points } = game
          points[member.id] = points[member.id] || 0

          message
            .reply(`You won! +1 point (${++points[member.id]} total)`)
            .then((newMessage) => {
              newMessage.delete({
                timeout: 1500,
              })
            })

          setTimeout(() => {
            if (game.stage === 'IN_GAME') {
              selectWord(game)

              const string = stages[game.stage](game.currentWord)
              game.message.edit(string)
            }
          }, 1000 * seconds)
        }
      }
    })

    gameLoop()
    const { channel } = message

    message.delete()
    channel.send('Starting game...').then((message) => {
      games[channel.id] = {
        message,
        stage: 'STARTING',
        counter: 3,
        remainingWords: [...words],
        points: {
        }
  }
	})
}
}