const { Client, Collection } = require("discord.js");
const client = new Client({
  disableEveryone: true
});
const { config } = require("dotenv");
const keepAlive = require('./server');
const AutoPoster = require('topgg-autoposter')
const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxODA5MzI1MTI3NzYxOTI3NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEzMDI2NjE5fQ.e-7uzV731jW5QLCJxdLsmO5p7fas2CV6AAjzfMZzDpk', client)
ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.description = new Collection();
client.usage = new Collection();
const games = new Map()
const ops = {
  games: games
}
client.ops = ops
config({
  path: __dirname + "/.env"
});

["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
keepAlive();
client.login("NzE4MDkzMjUxMjc3NjE5Mjc0.Xtj2dA.GImlFhajxI1fdDahMwpZKJyAI88")