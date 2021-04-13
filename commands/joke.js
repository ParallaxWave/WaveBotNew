const Memer = require("random-jokes-api");
const { embed } = require('../templates/completeEmbed');

module.exports = {
  
  name: 'joke',
  description: 'Get a joke',
  category: 'Content',
  async execute(message, args){
    message.channel.send({embed: embed("Joke", Memer.joke(), message.author)});
  }

};
