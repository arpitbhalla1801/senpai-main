const reportSchema = require("../../schemas/config");
const default_prefix="$"
module.exports = {
  name: "setreport",
  category: "config",
  usage: "$setreport <channel_id>",
  aliases: [],
  authorPermission: ["ADMINISTRATOR"],
  description: "Set the report channel for this server!",
  run: async (client, message, args) => {
    const new_channel = args[0];
    if (!new_channel) return message.reply("Please give a valid channel!");
    reportSchema.findOne({ Guild: message.guild.id }, async (err, data) => {
      if (err) throw err;
      if (!data) {
        let newreport = new reportSchema({
          Guild: message.guild.id,
          Prefix: default_prefix,
          Schannel: null,
          Rchannel: new_channel,
          Wchannel: null
        });
        newreport.save();
        message.channel.send(`Report channel has been set to <#${new_channel}>`);
      } else {
        data.Rchannel = new_channel;
        data.save();
        message.channel.send(`Report channel has been set to <#${new_channel}>`);
      }
    });
  },
};