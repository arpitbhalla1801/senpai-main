module.exports = {
    name: "reverse",
    description: "Reverses the given text",
	category: "fun",
	run: async(client, message, args) => {
        const text = args.join(" ");
	if(!text) return message.channel.send("Give something to reverse!")
		function reverseString(text)	{
			var splitString = text.split("");
			var reverseArray = splitString.reverse();
			var joinArray = reverseArray.join("");

			return message.channel.send(joinArray);
		}
		reverseString(text);
    }
}