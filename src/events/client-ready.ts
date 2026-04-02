import { Client, Routes } from "discord.js";
import { createEvent } from "../factory/event";
import { logger } from "@kauzx/logger";
import { bot } from "../bot";

export default createEvent({
	name: "clientReady",
	once: true,
	async execute(client: Client<true>) {
	  logger.info(`O bot foi conectado com sucesso em ${client.user.displayName},`);

	  const commands = bot.commands.toJSON();
	  await bot.rest.put(Routes.applicationGuildCommands(client.application.id, bot.commandsGuildId), { body: commands });

	  const guild = await bot.guilds.fetch(bot.commandsGuildId);

	  logger.success(`Foram carregados ${commands.length} comandos na guilda: ${guild.name}`);
	}
});
