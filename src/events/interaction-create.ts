import { Interaction, CacheType } from "discord.js";
import { createEvent } from "../factory/event";
import { bot } from "../bot";

export default createEvent({
    name: "interactionCreate",
    async execute(interaction: Interaction<CacheType>) {
      if (interaction.inGuild() && interaction.isChatInputCommand()) {
	const command = bot.commands.get(interaction.commandName);
	if (!command) {
	  interaction.reply("Não foi possível encontrar este comando.");
	  return;
	}

	await command.execute(interaction);
	return;
      }
    }
});
