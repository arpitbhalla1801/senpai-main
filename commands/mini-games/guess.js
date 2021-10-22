module.exports = {
  name: "guess",
  category: "mini-games",
  aliases: ["guess-the-number"],
  description: "Guess the right number between 1-10 to win, you have 3 chances!",
  usage: "$guess",
  run: async(client, message, args) => {
    message.reply(`Guess the number, it is between **1-10**!`)
    let number = Math.floor((Math.random() * 9) + 1)
    let chances = 3
    const filter = m => m.author.id === message.author.id
    const collector = message.channel.createMessageCollector(filter, { time: 60000, max: 3 });
    collector.on('collect', m => {
        if (parseInt(m.content) === number) {
          message.channel.send(`Correct, you got it right!`)
          collector.stop("correct")
        } else {
          chances--
          if (chances !== 0) {
            message.channel.send(`You have ${chances} chances remaining!`)
          }
        }
    })
    collector.on('end', (collected, reason) => {
      if (reason !== "correct") {
        message.channel.send(`Game Over, the number was **${number}**!`)
      }
    })
  }
}