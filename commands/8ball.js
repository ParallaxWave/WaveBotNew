const Discord = require('discord.js');
const { embed } = require('../templates/titleEmbed');
const { prefix } = require('../config.json');

module.exports = {
  
  name: '8ball',
  description: 'Ask the 8ball a question',
  category: 'Fun',
  responses: [
    'It is certain',
    'Without a doubt',
    'You may rely on it',
    'Yes definitely',
    'It is decidedly so',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy try again',
    'Better not tell you now',
    'Ask again later',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'Outlook not so good',
    'My sources say no',
    'Very doubtful',
    'My reply is no',
    'No, you idiot',
    'Highly unlikely',
    'Impossible',
    'Not at all',
    'Signs point to no',
    'Not this time'
  ],
  async execute(message, args){
    
    if(args.join(' ')){
      const exampleEmbed = new Discord.MessageEmbed()
    	.setColor('#81a1c1')
    	.setTitle("8-Ball")
        .setDescription(`**\`${args.join(' ')}\`** \n \n :8ball: **${this.responses[Math.floor(Math.random() * this.responses.length)]}**`)
      .setFooter("Requested by " + message.author.username + " " + message.author.discriminator, message.author.avatarURL({ dynamic: true }));
  
      message.channel.send(exampleEmbed);
    }
    else{
      message.channel.send({ embed: embed("Oops...", "Please enter a question after the command! \n\n ``" + prefix + "8ball <your question here>``") }); 
    }
  }

};
