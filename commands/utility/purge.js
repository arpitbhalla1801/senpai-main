module.exports = {
  name: "purge",
  description: "Clears a given amount of messages in a channel!",
  category: "utility",
  usage: "$purge <amount>",
  aliases: ["clear"],
  authorPermission: ["MANAGE_MESSAGES"],
  botPermission: ["MANAGE_MESSAGES"],
  run: async(client, message, args) => {
    
    await message.delete()
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true);
    await message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
  }
}