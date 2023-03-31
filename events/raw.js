import {Events} from 'discord.js';

export default {
  name: Events.Raw,
  once: false,
  async execute(bot,raw) {
    //console.log({raw})
  },
};