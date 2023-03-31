import {Events} from 'discord.js';

export default {
  name: Events.MessageCreate,
  once: false,
  async execute(bot,message) {
    if(message.author.bot){ return }
    const currGuild = bot.guilds.filter(guild => guild.id === message.guildId)[0];
    console.log({guild: currGuild.name, channel: message.channel.name, author: message.author.username, message: message.content, timeStamp: message.createdTimestamp})
    if(bot.answerEnabled){
      if(message.content[0] === '!'){
        message.reply('Ok!')
      }
    }
  },
};