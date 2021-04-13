const yts = require( 'yt-search' );
const { embed } = require('../templates/completeEmbed');

module.exports = {
  
  name: 'yt',
  description: 'Search for a YouTube video',
  category: 'Content',
  async execute(message, args){
    const r = await yts(args.join(' ') || 'rick roll');
    const data = r.videos[0];
    message.channel.send(data.url);
  }

};
