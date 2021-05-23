const fs = require('fs');
const Discord = require('discord.js');
const express = require('express');
const { prefix } = require('./config.json');
const token = process.env.TOKEN;
const { status } = require('./templates/status.js');
const { alias } = require('./templates/alias.js');
const client = new Discord.Client(); 
const app = express();
app.listen(process.env.PORT || 5000, () => console.log('Bound to port'));

//Set Status
const setStatus = () => {
  const options = status(prefix, client);
  const random = Math.floor(Math.random() * options.length);
  client.user.setPresence(options[random]);
};

client.once('ready', () => {
  console.log('Bot logged in!');
  setInterval(setStatus, 3000);
});



client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
  if(client.commands.has(command)){
    client.commands.get(command).execute(message, args);
  }
  else{
    for(const a of alias){
      if(a.index.includes(command)){
        try {
        	client.commands.get(a.command).execute(message, args);
        } catch (error) {
        	console.error(error);
        	message.reply('There was an error trying to execute that command!');
        }
      }
    }
  }
});


client.login(token);
