import { Interaction, CacheType } from "discord.js";
import { createEvent } from "../factory/event";
import { bot } from "../bot";
import { db } from "../schemas";

export default createEvent({
    name: "interactionCreate",
    async execute(interaction: Interaction<CacheType>) {
      if (interaction.inGuild() && interaction.isChatInputCommand()) {
	const command = bot.commands.get(interaction.commandName);
	if (!command) {
	  interaction.reply("Não foi possível encontrar este comando.");
	  return;
	}

	const userData = await db.users.findById(interaction.user.id);
	if (!userData) {
	  await db.users.create({ _id: interaction.user.id });
	}

	await command.execute(interaction);
	return;
      }
    }
});
