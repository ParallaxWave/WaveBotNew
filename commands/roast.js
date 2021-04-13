const Memer = require("random-jokes-api");
const { embed } = require('../templates/completeEmbed');

module.exports = {
  
  name: 'roast',
  description: 'Get a roast',
  category: 'Content',
  async execute(message, args){
    message.channel.send({embed: embed("Roast", Memer.roast(), message.author)});
  }

};
