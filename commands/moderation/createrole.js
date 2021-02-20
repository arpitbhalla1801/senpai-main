module.exports = {
  name: "createrole",
  aliases: ["newrole"],
  description: "Creates a new role for the server!",
  category: "moderation",
  usage: "$createrole <role_name>",
  authorPermission: ["MANAGE_ROLES"],
  botPermission: ["MANAGE_ROLES"],
  run: async(client, message, args) => {
    let role = args.join(" ")
    message.guild.roles.create({
      data: {
        name: role
      }
    })
    message.reply("Successfully created the role " + role + "!\nMake sure to check the permissions.")
  }
}