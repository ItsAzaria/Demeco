import 'https://deno.land/x/dotenv/load.ts';
import Client from 'https://deno.land/x/discordeno/module/client.ts';
import { Intents } from 'https://deno.land/x/discordeno/types/options.ts';
import { eventHandlers } from "./src/events/eventHandlers.ts";

const token = Deno.env.get(`DISCORD_TOKEN`);
const botID = Deno.env.get(`BOT_ID`);
if(!token) throw Error(`You must specify a valid Discord bot token.`);



export const BotOptions = {
  token: token,
  botID: botID,
  intents: [Intents.GUILD_MESSAGES, Intents.GUILDS],
  eventHandlers,
};

Client(BotOptions);