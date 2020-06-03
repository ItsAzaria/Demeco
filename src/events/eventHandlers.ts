import { EventHandlers } from "https://deno.land/x/discordeno/types/options.ts";
import { messageCreate } from "./messageCreate.ts";

export const eventHandlers: EventHandlers = {
  messageCreate
};