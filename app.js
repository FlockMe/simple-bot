const Discord = require('discord.js')
const client = new Discord.Client({ disableMentions: true })
const config = require("./config.json")
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
let status = [``,``]
  setInterval(function(){
  let statuss = status[Math.floor(Math.random() * status.length)];
  client.user.setActivity(statuss, {type: "WATCHING"})}, 4000) //isi angka terserah
});
client.on('message', async message => {
const prefix = config.prefix
    let msg = message.content.toLowerCase();   
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    let command = cmd;
    
    if(!message.content.startsWith(prefix)) return;
    message.prefix = prefix;

   if (!msg.startsWith(prefix)) return;
   if(message.channel.type === "dm") return;
   if (message.author.bot) return; 
let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args);
})
client.login(process.env.TOKEN)
