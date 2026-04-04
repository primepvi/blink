import { Interaction, CacheType } from "discord.js";
import { createEvent } from "../factory/event";
import { bot } from "../bot";
import { db } from "../schemas";
import { emojis } from "../utils/emojis";

export default createEvent({
	name: "interactionCreate",
	async execute(interaction: Interaction<CacheType>) {
		if (interaction.inGuild() && interaction.isChatInputCommand()) {
			const subCommand = interaction.options.getSubcommand(false);
			const command = !!subCommand ? bot.subCommands.get(interaction.commandName + "_" + subCommand) : bot.commands.get(interaction.commandName);
			if (!command) {
			  interaction.reply({ content: `> ${emojis.icon_error} ** | Erro!** ${interaction.user}, **não foi** possível **encontrar** este **comando**.`, flags: ["Ephemeral"] });
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
