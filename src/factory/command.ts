import { ApplicationCommandType, ChatInputCommandInteraction } from "discord.js";

export interface CommandOptions {
  name: string;
  description: string;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void> | void
}

export function createCommand(options: CommandOptions) {
  return {
    type: ApplicationCommandType.ChatInput,
    ...options
  }
}
