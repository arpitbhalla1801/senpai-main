const { letterTrans } = require('custom-translate');
const dictionary = {
    "a": "🇦",
    "b": "🇧",
    "c": "🇨",
    "d": "🇩",
    "e": "🇪",
    "f": "🇫",
    "g": "🇬",
    "h": "🇭",
    "i": "🇮",
    "j": "🇯",
    "k": "🇰",
    "l": "🇱",
    "m": "🇲",
    "n": "🇳",
    "o": "🇴",
    "p": "🇵",
    "q": "🇶",
    "r": "🇷",
    "s": "🇸",
    "t": "🇹",
    "u": "🇺",
    "v": "🇻",
    "w": "🇼",
    "x": "🇽",
    "y": "🇾",
    "z": "🇿",
    "0": ":zero:",
    "1": ":one:",
    "2": ":two:",
    "3": ":three:",
    "4": ":four:",
    "5": ":five:",
    "6": ":six:",
    "7": ":seven:",
    "8": ":eight:",
    "9": ":nine:",
    "?": "❓",
    "!": "❗",
    "#": "#⃣"
}
module.exports = {
    name: "emojify",
    description: "converts text to emoji",
    category: "fun",
    aliases: ["converttoemoji"],
    run: async(client, message, args) => {
	      if(!args[0]) return message.channel.send("Specify something to convert into emoji!")
        message.channel.send(letterTrans(args.join(' ').toLowerCase(), dictionary, ' '));
    }
}