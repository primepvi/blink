import { ApplicationCommandOption, ApplicationCommandOptionType, ApplicationCommandType, ChatInputCommandInteraction } from "discord.js";

export interface CommandOptions {
  name: string;
  description: string;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void> | void;
  options: ApplicationCommandOption[],
  subCommands?: string[],
}

export interface SubCommandOptions {
  parent: string;
  name: string;
  description: string;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void> | void;
  options: ApplicationCommandOption[],
}

export function createCommand(options: CommandOptions) {
  return {
    type: ApplicationCommandType.ChatInput,
    ...options
  }
}

export function createSubCommand(options: SubCommandOptions) {
  return {
    type: ApplicationCommandOptionType.Subcommand,
    ...options
  }
}
