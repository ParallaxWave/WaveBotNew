const fetch = require('node-fetch');

function embed(title, text, user = 'a user', imageUrl = '', thumbnailUrl = '', postUrl = "", desc=""){
    return {
      color: getColor.getColor(),
      title,
      url: postUrl,
      description: desc,
      footer: {
        text,
        //icon_url: 'https://media.discordapp.net/attachments/509287928703483907/838337260508151808/reddit.png?width=454&height=454'
      },
      author: {
        name: user.username,
        icon_url: user.avatarURL({ dynamic: true })
      }
      ,
      image: {
        url: imageUrl
      },
      
      timestamp: new Date()
    };
  }




module.exports = {
  
  name: 'reddit',
  description: 'Get results from a subreddit',
  category: 'Content',
  async execute(message, args){
    const command = `r/${args.join(' ')}`
    let data = await fetch('http://meme-api.herokuapp.com/gimme/'+args.join(' '))
      .then(res => res.json())
    if(data.url){
      if(data.nsfw){
          if(message.channel.nsfw)
              message.channel.send({ embed: embed(data.title, `r/${command}  •  👍 ${data.ups}`, message.author, data.url, '', data.postLink) }).then(message => {
          message.react("👍");
          message.react("👎");
        });
          else
             message.channel.send({ embed: embed("NSFW result", "Try again in an nsfw channel", message.author, 'https://i.imgur.com/oe4iK5i.gif') });
      }
      else
        message.channel.send({ embed: embed(data.title, `r/${command}  •  👍 ${data.ups}`, message.author, data.url, '', data.postLink) }).then(message => {
          message.react("👍");
          message.react("👎");
        });
    }
    else
      message.channel.send({ embed: embed("Result doesn\'t contain any images", "We can't load this post ", message.author) });
  }

};
