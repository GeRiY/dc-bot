import * as dotenv from 'dotenv'
import * as Discord from "discord.js";
import {Client, GatewayIntentBits, GatewayDispatchEvents, Guild, REST, Routes, Partials} from "discord.js";
import {readCommands} from "./commandsHandler.js";
import {readEvents} from "./eventsHandler.js";

const bot = {
  token: null,
  clientId: null,
  client: null,
  restVersion: '10',
  commands: null,
  commandNames: null,
  rest: null,
  guilds: [],
  answerEnabled: false,
  async init() {
    dotenv.config()
    this.token = process.env.TOKEN;
    this.clientId = process.env.CLIENT_ID;

    const {commands, commandNames} = await readCommands();
    this.commands = commands;
    this.commandNames = commandNames;

    await this.createClient();
    await this.onClientReady();
    this.login();
    console.log('init done')
  },
  async resetCommands() {
    // regisztrált saját parancsok törlése
    const newCommadNames = [];
    this.commandNames.forEach(newCom => {
      newCommadNames.push(newCom.name)
    });
    const promises = [];
    const currentCommands = await this.client.application.commands.fetch();
    currentCommands.map(async curCom => {
      if (newCommadNames.includes(curCom.name)) {
        promises.push(this.client.application.commands.delete(curCom.id))
        console.log(curCom.name + ' command is deleted!');
      }
    })
    return await Promise.all(promises);
  },
  async registerRun() {
    const rest = new REST({version: this.restVersion}).setToken(this.token);
    this.rest = rest;
    try {
      // saját parancsok regisztrálása
      await rest.put(Routes.applicationCommands(this.clientId), {body: this.commandNames});
    } catch (error) {
      console.log('*** error ***')
      console.error(error);
    }
    console.log('registry done')
  },
  async createClient() {
    console.log(GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildMessageTyping,
      GatewayIntentBits.MessageContent)
    this.client = new Discord.Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.MessageContent
      ]
    });
    this.client.removeAllListeners();
    console.log('createClient done')
  },
  async onClientReady() {
    this.client.on('ready', async () => {
      console.log(`Logged in as ${this.client.user.tag}!`);
      await this.resetCommands();
      await this.registerRun();
      await this.afterClientReady();
    });
    await this.setOnEvents();
    console.log('onClientReady done')
  },
  async setOnEvents() {
    const {events} = await readEvents();
    events.forEach((event) => {
      if (event.once) {
        this.client.once(event.name, async (...args) => await event.execute(this,...args));
      } else {
        this.client.on(event.name, async (...args) => await event.execute(this,...args));
      }
    })
  },
  login() {
    this.client.login(this.token);
    console.log('login done')
  },
  async afterClientReady() {
    await this.setAllGuilds();
    await this.setAllGuildChannels();
  },
  async setAllGuilds() {
    const promises = [];
    const guilds = await this.client.guilds.fetch();
    guilds.forEach(guild => {
      promises.push(this.client.guilds.fetch(guild.id).then((guildObj) => {
        this.guilds.push({id: guildObj.id, name: guildObj.name, channels: guildObj.channels,})
      }))
    })

    return Promise.all(promises);
  },
  async setAllGuildChannels() {
    const promises = [];
    this.guilds.forEach(guild => {
      promises.push(guild.channels.fetch().then((channels) => {
        const processedChannels = [];
        channels.forEach(channel => {
          processedChannels.push(channel);
        })
        guild.channels = processedChannels;
      }))
    })
    return Promise.all(promises)
  },
}

bot.init().then(() => {}).catch(err => {})