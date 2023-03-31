import fs from 'fs'
export async function readCommands(){
  const commands = [];
  const commandNames = [];
  const promises = [];

  const dirContent = fs.readdirSync('commands'); // return ['embed-ping.js', 'ping.js']
  for (const commandFile of dirContent) {
    promises.push(import(`./commands/${commandFile}`).then((commandModule) => {
      commandNames.push(commandModule.default.options);
      commands.push(commandModule.default);
    }))
  }
  await Promise.all(promises)
  return { commands, commandNames };
}