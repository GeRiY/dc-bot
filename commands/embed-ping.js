import {EmbedBuilder} from "discord.js";

export default {
  options: {
    name: 'ping-embed',
    description: 'Replies with Embed Pong!'
  },
  run(bot){
    // Create an ephemeral reply with an embed
    const embed = new EmbedBuilder().setDescription('Embed Pong!');
    return { embeds: [embed], ephemeral: true };
  }
}