module.exports = {
    name: "roll",
    description: "Rolls a dice",
    aliases: ["rolldice"],
    category: "fun",
    run: async(client, message, args) => {
        const rollDice = Math.floor(Math.random() * 6) + 1
        message.channel.send("You rolled a " + rollDice);
    }
}