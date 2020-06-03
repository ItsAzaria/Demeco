import { Message } from 'https://deno.land/x/discordeno/structures/message.ts';
import { sendMessage } from 'https://deno.land/x/discordeno/handlers/channel.ts';
import { ftoc, ctof } from '../utils/conversionUtils.ts';

export const messageCreate = (message: Message) => {
    if (message.author.bot) return;

    const regex = new RegExp(/(-?\d+)\s?(c|f)/ig);
    const matchAll = message.content.matchAll(regex);
    if(!matchAll) return;

    let msg = '';

    for(let match of matchAll) {
        const value = parseFloat(match[1]);
        let result = null;
        let original = null;
    
        // yes a switch, deal with it
        switch(match[2].toLowerCase()) {
            case 'f':
                original = value + '°F'
                result = ftoc(value);
                break;
            case 'c':
                original = value + '°C'
                result = ctof(value);
                break;
        }
    
        if (result) {
            msg += `${original} == ${result}\n`;
        }
    }

    sendMessage(message.channel, msg);

    
    
};