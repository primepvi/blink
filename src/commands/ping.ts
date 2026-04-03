import { ChatInputCommandInteraction } from "discord.js";
import { createCommand } from "../factory/command";
import { bot } from "../bot";

export default createCommand({
	name: "ping",
	description: "Utilize esse comando para ver minha latência.",
	options: [],
	execute(interaction: ChatInputCommandInteraction) {
		interaction.reply(`Minha latência é de **${bot.ws.ping}ms**.`);
	}
});
