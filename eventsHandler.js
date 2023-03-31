import fs from 'fs'

export async function readEvents() {
  const events = [];
  const promises = [];

  const dirContent = fs.readdirSync('events');

  for (const eventFile of dirContent) {
    promises.push(import(`./events/${eventFile}`).then((eventModule) => {
      events.push(eventModule.default);
    }))
  }

  await Promise.all(promises)
  return {events};
}