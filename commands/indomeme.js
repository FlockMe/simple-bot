const Discord = require('discord.js')
const randomPuppy = require('random-puppy')

exports.run = async (client, message, args, level) => {
  const subReddits = ['indonesia']
  const random = subReddits[Math.floor(Math.random() * subReddits.length)]

  const img = await randomPuppy(random)
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)

  message.channel.send(embed)
}


exports.help = {
  name: 'indomeme'
}
