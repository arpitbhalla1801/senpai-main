module.exports = {
  name: "deleterole",
  aliases: [],
  description: "Deletes an existing role from the server!",
  category: "moderation",
  usage: "$deleterole <role_name> or <role_id>",
  authorPermission: ["MANAGE_ROLES"],
  botPermission: ["MANAGE_ROLES"],
  run: async(client, message, args) => {
    const role = args[0]
    const role1 = message.guild.roles.cache.find((r) => r.name === `${role}`) || message.guild.roles.cache.find((r) => r.id === `${role}`)
    role1.delete()
    message.reply("Successfully deleted the role!")
  }
}