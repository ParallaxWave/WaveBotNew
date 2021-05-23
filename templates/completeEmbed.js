const Discord = require('discord.js');
const getColor = require('./colors');


module.exports = {

  embed(title, text, user = 'a user', imageUrl = '', link = ""){
    return {
      color: getColor.getColor(),
      url: link,
      title,
      description: text,
      author: {
        name: `${user.username}`,
        icon_url: user.avatarURL({ dynamic: true })
      },
      timestamp: new Date(),
      image: {
        url: imageUrl
      }
    };
  }

};
