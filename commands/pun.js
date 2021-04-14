const Memer = require("random-jokes-api");
const { embed } = require('../templates/completeEmbed');

module.exports = {
  
  name: 'pun',
  description: 'Get a pun',
  category: 'Fun',
  async execute(message, args){
    message.channel.send({embed: embed("Pun", Memer.pun(), message.author)});
  }

};
