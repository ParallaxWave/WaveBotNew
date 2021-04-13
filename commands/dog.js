const Memer = require("random-jokes-api");
const { embed } = require('../templates/completeEmbed');

module.exports = {
  
  name: 'dog',
  description: 'Get an image of a dog',
  category: 'Content',
  async execute(message, args){
    message.channel.send({embed: embed("Dog", "Here's a dog", message.author, Memer.dog())});
  }

};
