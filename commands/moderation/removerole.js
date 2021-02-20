const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "removerole",
  aliases: ["rr"],
  category: "moderation",
  usage: "removerole @user <role_name> or <role_id>",
  description: "Removes a role from a user!",
  authorPermission: ["MANAGE_ROLES"],
  botPermission: ["MANAGE_ROLES"],
  run: async(client, message, args) => {
    const user = message.mentions.members.first();
    if (!user) {
      return message.channel.send(
        `**${message.author.username}**, Please mention someone!`
      );
    }

    if (user.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, You can not change roles for yourself !`
      );
    }
    let role = args.slice(1).join(" ");

    if (!args[1]) {
      return message.channel.send(
        `**${message.author.username}**, Please give a role name`
      );
    }
    const role1 = message.guild.roles.cache.find((r) => r.name === `${role}`) || message.guild.roles.cache.find((r) => r.id === `${role}`)
    user.roles.remove(role1);

    const embed = new MessageEmbed().setDescription(
      `<@&${role1.id}> has been removed from ${user}`
    );
    message.channel.send(embed);
  }
}