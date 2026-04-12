import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { emojis } from "../../utils/emojis";

export default createSubCommand({
	parent: "dungeon",
	name: "quit",
	description: "Utilize esse comando para desistir de uma dungeon.",
	options: [],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		const userData = (await db.users.findById(interaction.user.id))!;
		if (!userData.currentMatch) {
			interaction.editReply(`> ${emojis.icon_error} **| Erro!** ${interaction.user}, você **não possui** uma **partida em andamento**.`);
			return;
		}

		const matchData = (await db.matches.findById(userData.currentMatch!))!;
		matchData.finalizedAt = Date.now();
		await matchData.save();

		userData.currentMatch = undefined;
		await userData.save();

		interaction.editReply(`> ${emojis.icon_ok} **| Sucesso!** ${interaction.user}, você **saiu da dungeon** \`${matchData.seed}\`.`);
	}
})
