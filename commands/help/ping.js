module.exports = {
  name: "ping",
  aliases: ["pong", "latency"],
  description: "Check the bot's ping",
  category: "info",
  usage: "$ping",
  run: async(client, message) => {
    const m = await message.channel.send("Ping? ");
    m.edit(`Pong! :ping_pong: Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
}