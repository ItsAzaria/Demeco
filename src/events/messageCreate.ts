import { Message } from 'https://deno.land/x/discordeno/structures/message.ts';
import { sendMessage } from 'https://deno.land/x/discordeno/handlers/channel.ts';
import { ftoc, ctof } from '../utils/conversionUtils.ts';

export const messageCreate = (message: Message) => {
    if (message.author.bot) return;

    const regex = new RegExp(/(-?\d+)\s?(c|f)/i);
    const match = message.content.match(regex);
    if(!match) return;

    const value = parseFloat(match[1]);
    let result = null;

    // yes a switch, deal with it
    switch(match[2].toLowerCase()) {
        case 'f':
            result = ftoc(value)
            break;
        case 'c':
            result = ctof(value);
            break;
    }

    if (result) {
        sendMessage(message.channel, `${match[0]} otherwise known as ${result}`);
    }
    
};