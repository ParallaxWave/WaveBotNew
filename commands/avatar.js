const { embed } = require('../templates/completeEmbed');

module.exports = {
  
  name: 'avatar',
  description: 'Get a user\'s avatar',
  category: 'Image',
  async execute(message, args){
    if(!message.mentions.users.first())
      message.channel.send({ embed: embed('Avatar', '' , message.author, message.author.avatarURL({ dynamic: true, size: 4096 }))});
    else
      message.channel.send({ embed: embed('Avatar', '' , message.author, message.mentions.users.first().avatarURL({ dynamic: true, size: 4096 }))});
  }

};
