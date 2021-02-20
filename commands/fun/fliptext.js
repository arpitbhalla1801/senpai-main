const fs = require("fs");
const flipTable = JSON.parse(fs.readFileSync("./wordbanks/fliptext.json", "utf8"));
module.exports = {
    name: "fliptext",
    aliases: ["ft"],
	description: "Flips a given text!",
	usage: "$fliptext <text>",
    category: "fun",
    run: async(client, message, args) => {
        const text = args.join(" ");
	if(!text) return message.channel.send("Give something to flip!")
		function flipString(text)	{
			var last = text.length - 1;
			var result = new Array(text.length)
			for (var i = last; i >= 0; --i)	{
				var c = text.charAt(i)
				var r = flipTable[c]
				result[last - i] = r != undefined ? r : c
			}
			return message.channel.send(result.join(''));
		}
		for (i in flipTable) {
			flipTable[flipTable[i]] = i
}
		flipString(text);
    }
}