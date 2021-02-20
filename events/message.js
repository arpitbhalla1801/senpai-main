const {default_prefix, owners} = require ('../config.json');
const prefixSchema = require('../schemas/config')
module.exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  client.prefix = async function(message) {
        let custom;

        const data = await prefixSchema.findOne({ Guild : message.guild.id })
            .catch(err => console.log(err))
        
        if(data) {
            custom = data.Prefix;
        } else {
            custom = default_prefix
        }
        return custom;
    }
  let prefix = await client.prefix(message)
  if(message.mentions.users.has('718093251277619274')) {
    if(message.content.includes('prefix')) {
      message.reply("My prefix for this server is `" + prefix +"`.\nUse `" + prefix +"help` to view the help command!")
    }
  }

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.members.fetch (message);

  const args = message.content.slice (prefix.length).trim ().split (/ +/g);
  const cmd = args.shift ().toLowerCase ();

  if (cmd.length === 0) return;

  let command = client.commands.get (cmd);
  if (!command) command = client.commands.get (client.aliases.get (cmd));

  if (!command) return;
  if (command.botPermission) {
    let neededPerms = [];

    command.botPermission.forEach (p => {
      if (!message.guild.me.hasPermission (p)) neededPerms.push ('`' + p + '`');
    });

    if (neededPerms.length)
      return message.channel.send (
        `I need ${neededPerms.join (', ')} permission(s) to run this command!`
      );
  }
  if(command.authorPermission) {
    let neededPerms = [];

    command.authorPermission.forEach (p => {
      if (!message.member.hasPermission (p)) neededPerms.push ('`' + p + '`');
    });

    if (neededPerms.length)
      return message.channel.send (
        `You need ${neededPerms.join (', ')} permission(s) to run this command!`
      );
  }

  if (command.ownerOnly) {
    if (!owners.includes (message.author.id))
      return message.channel.send (
        'This command can only be used by the bot owner.'
      );
  }

  if (command) command.run (client, message, args);
};