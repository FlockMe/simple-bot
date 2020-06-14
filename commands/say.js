const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  let say = args.join(" ");
    if (!args[0]) return message.reply("Please enter the word!");
  const cmd = args.join(" ").split(" ")
  message.channel.send(say)
  message.delete();
}
