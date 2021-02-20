module.exports = {
  name: "nick",
  category: "moderation",
  description: "Sets the nickname of a user!",
  authorPermission: ["MANAGE_SERVER"],
  botPermission: ["MANAGE_SERVER"],
  aliases: ["setnick"],
  usage: "$nick @user <new_nickname>",
  run: async (client, message, args) => {

    let user = message.mentions.users.first()

    if (!user)
      return message.channel.send({
        embed: { color: "RED", description: "You need to mention a valid auser!" }
      });

    let nick = args.slice(1).join(" ");
    if (!nick)
      return message.channel.send({
        embed: { color: "RED", description: "You need to input the nickname!" }
      });

    let member = message.guild.members.cache.get(user.id);
    if (nick) {
      await member.setNickname(`${nick}`);
      return message.channel.send({
        embed: {
          color: "RED",
          description: `Successfully changed **${user.username}**\'s nickname`
        }
      });
    }
  }
};
