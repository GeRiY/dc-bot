# Nodejs Bot

## package.json
```javascript
{
   "dotenv": "^16.0.3",
   "discord.js": "^14.8.0"
}
```
## Documentation used
- [Discord.js.org](https://discord.js.org/#/docs/main/stable/general/welcome)

## Installation steps
Register and create your bot on the server at this link: https://discord.com/developers/applications

1. Clone the repo: https://github.com/GeRiY/dc-bot.git
2. Run: `npm install`
3. Create a `.env` file from the `.env-example` file
4. Fill in the requested information in the `.env` file.
5. On the page https://discord.com/developers/applications in the `OAuth2` sidebar at the selected `BOT`,
   you need to check `Bot` at `Scops` and call the received `Link` and then set up which server to register the `Bot`.
6. Run the program: `npm run dev`
7. Use the Bot on the server specified in `.env`.

## Acquiring requested data
### In the `.env` file
- You can find the value for `TOKEN` on the page https://discord.com/developers/applications
  after logging in by opening the selected or created Application and going to the sidebar titled `Bot`.
  There you can generate it and copy it with `Copy`.
- `CLIENT_ID

## Commands:
- `/ping` message
- `/ping-embed` format message
- `/toggle-answer` If this is turned on, then if you start the message with `!`, it will respond with __ok.__

## For questions or comments
- mgeri1993@gmail.com
