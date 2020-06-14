const Discord = require("discord.js") 

exports.run = async (client, args, message) => {
let color = args[0]

    let title = args[1]

    let text = args.slice(2).join(" ")

    let embed = new Discord.MessageEmbed()

    .setColor(color)

    .setTitle(title)

    .addField(`${message.author.tag}`, text)

    message.channel.send(embed)

  }

}
