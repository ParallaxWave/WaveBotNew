const Memer = require("random-jokes-api");
const { embed } = require('../templates/completeEmbed');

module.exports = {
  
  name: 'cat',
  description: 'Get an image of a cat',
  category: 'Image',
  async execute(message, args){
    message.channel.send({embed: embed("Cat", "Here's a cat", message.author, Memer.cat())});
  }

};
