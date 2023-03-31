import {Events} from 'discord.js';

export default {
  name: Events.InteractionCreate,
  once: false,
  async execute(bot,interaction) {
    if (!interaction.isChatInputCommand()) return;
    const calledCommand = bot.commands.filter(command => command.options.name === interaction.commandName)[0]
    if (calledCommand) {
      console.log(interaction.commandName + ' command is used.')
      await interaction.reply(calledCommand.run(bot));
    }
  },
};