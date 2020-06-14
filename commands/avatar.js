const Discord =  require('discord.js');

module.exports.run = (client, message, args) => {
    if (message.mentions.users.size > 0) {
      const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Avatar for ${message.mentions.users.first().tag}`)
        .setImage(`${message.mentions.users.first().displayAvatarURL({dynamic: true}) + "?size=2048"}`)
        .setTimestamp()
        .setFooter(`FlockMe Club`);
        message.channel.send({embed});
    } 
  if(!args.length){
      const embed = new Discord.MessageEmbed()
      .setColor(0xFFFF00)
      .setTitle(`Avatar for ${message.author.tag}`)
      .setImage(`${message.author.displayAvatarURL({dynamic: true}) + "?size=2048"}`)
      .setTimestamp()
      .setFooter(`FlockMe Club`);
      message.channel.send({embed});
    }
};
