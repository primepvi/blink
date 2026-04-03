import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";

export default createSubCommand({
	parent: "match",
	name: "quit",
	description: "Utilize este comando para sair de uma partida.",
	options: [],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		const userData = (await db.users.findById(interaction.user.id))!;
		if (!userData.match) {
			interaction.editReply("Você não tem uma partida em andamento.");
			return;
		}

		const matchData = (await db.matches.findById(userData.match))!;
		matchData.finalizedAt = Date.now();
		await matchData.save();

		userData.match = undefined;
		await userData.save();

		interaction.editReply("Você saiu da partida com sucesso.");
	},
});
