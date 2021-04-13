const fetch = require('node-fetch');
const { embed } = require('../templates/completeEmbed');

module.exports = {
  
  name: 'meme',
  description: 'Get a meme',
  category: 'Content',
  async execute(message, args){
    let data = await fetch('http://meme-api.herokuapp.com/gimme')
      .then(res => res.json())
    message.channel.send({ embed: embed('Meme', data.title, message.author, data.url) });
  }

};
