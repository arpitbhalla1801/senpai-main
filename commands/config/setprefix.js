const prefixSchema = require("../../schemas/config");
module.exports = {
  name: "setprefix",
  category: "config",
  usage: "$setprefix <new_prefix>",
  aliases: [],
  authorPermission: ["ADMINISTRATOR"],
  description: "Set the prefix for this server!",
  run: async (client, message, args) => {
    const new_prefix = args[0];
    if (!new_prefix) return message.reply("Please give a new prefix!");
    if (new_prefix > 3) return message.reply("Cannot set a prefix more than 3 letters!");
    prefixSchema.findOne({ Guild: message.guild.id }, async (err, data) => {
      if (err) throw err;
      if (!data) {
        let newPrefix = new prefixSchema({
          Guild: message.guild.id,
          Prefix: new_prefix,
          Schannel: null,
          Rchannel: null,
          Wchannel: null
        });
        newPrefix.save();
        message.channel.send(`Prefix has been updated to **${new_prefix}**`);
      } else {
        data.Prefix = new_prefix;
        data.save();
        message.channel.send(`Prefix has been updated to **${new_prefix}**`);
      }
    });
  },
};
