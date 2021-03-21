const prefixSchema = require("../../schemas/config");
const default_prefix = "$";
module.exports = {
  name: "setsuggest",
  description: "Set the suggestions channel for the server!",
  usage: "$setsuggest <channel_id>",
  category: "config",
  authorPermission: ["ADMINISTRATOR"],
  aliases: [],
  run: async (client, message, args) => {
    const channel_id = args[0];
    if (!channel_id) return message.reply("Please give a valid channel id!");
    prefixSchema.findOne({ Guild: message.guild.id }, async (err, data) => {
      if (err) throw err;
      if (!data) {
        let newPrefix = new prefixSchema({
          Guild: message.guild.id,
          Prefix: default_prefix,
          Schannel: channel_id,
          Rchannel: null,
          Wchannel: null,
        });
        newPrefix.save();
        message.channel.send(
          `Suggestion channel has been set to <#${channel_id}>`
        );
      } else {
        data.Schannel = channel_id;
        data.save();
        message.channel.send(
          `Suggestion channel has been set to <#${channel_id}>`
        );
      }
    });
  },
};
