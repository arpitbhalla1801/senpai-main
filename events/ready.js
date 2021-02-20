const mongo = require('../mongo')
const loadFeatures = require('../features/load-features.js')
module.exports.run = async(client) => {
  loadFeatures(client)
  console.log(`Hi, ${client.user.username} is now online on ${client.guilds.cache.size} servers!`);
  console.log(`Total Commands - ${client.commands.array().length}`)
  client.user.setActivity(`$help | ${client.guilds.cache.size} guilds`)
  await mongo()
};