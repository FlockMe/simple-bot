const Discord = require("discord.js") 
exports.run = async (client, message) => {
  const m = await message.channel.send('Getting info...')
  
  const pembed = new Discord.MessageEmbed()
  .setTitle(":ping_pong: PONG!")
  .addField("Roundtrip took", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
  .addField("Hearthbeat", `${Math.round(client.ws.ping)}ms`, true)
  .setColor("RANDOM")
  .setTimestamp()
  return setTimeout(function(){ m.edit("Success getting info!", pembed);}, 3000);
};
