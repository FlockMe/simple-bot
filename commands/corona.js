const Discord =  require("discord.js");
const { NovelCovid } = require("novelcovid")
const db = require('quick.db')
const track = new NovelCovid();
const config = require("../config.json")
module.exports.run = async (bot, message, args) => {
let prefix = config.prefix

if(!args.length) {

  let corona = await track.all()
  
  let embed = new Discord.MessageEmbed()
  .setTitle(":map:World Stats")
  .setColor("YELLOW")
  
  .setDescription("COVID-19 Stats in the World")
  .addField("Cases", corona.cases, true)
  .addField("Deaths", corona.deaths, true)
  .addField("Recovored", corona.recovered, true)
  .addField("Active", corona.active, true)
  .addField("Today Cases", corona.todayCases, true)
  .setFooter(`Use ${prefix}corona <country> to look stats in one country`)
  
  message.channel.send(embed)
  
} else {
  
  let corona = await track.countries(args.join(" "))
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`${corona.country} Stats`)
  .setColor("YELLOW")
  .setDescription(`COVID-19 Stats in ${corona.country}`) 
  //.addField(corona.country.flag)
  .addField("Cases", corona.cases, true)
  .addField("Deaths", corona.deaths, true)
  .addField("Recovored", corona.recovered, true)
  .addField("Active", corona.active, true)
  .addField("Today Cases", corona.todayCases, true)
  .setFooter(`Use ${prefix}corona to look stats in the world`)


  message.channel.send(embed)
}

}

module.exports.help = {
  name:"corona",
  description:"Untuk mengetahui jumlah kasus COVID-19",
  usage:"corona a (Total kasus) || corona <nama negara> (Tidak dengan <>)"
}
