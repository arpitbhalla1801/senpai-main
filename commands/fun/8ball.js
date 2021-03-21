const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "8ball",
  description: "Ask the magic 8ball a question!",
  category: "fun",
  run: async(client, message, args) => {
    let question = args.join(" ")
    if (!question) {
      return message.channel.send(`You did not specify your question!`);
    } else {
      let responses = [
        "Yes",
        "No",
        "Definitely",
        "Absolutely",
        "Not in a million years",
        "Never",
        "Perhaps",
        "IDC",
        "Don't ask me, I ain't a human !",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Your question: **${question}**\n\nMy reply: **${response}**`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  }
}