import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { emojis } from "../../utils/emojis";

export default createSubCommand({
	parent: "match",
	name: "quit",
	description: "Utilize este comando para sair de uma partida.",
	options: [],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		const userData = (await db.users.findById(interaction.user.id))!;
	  if (!userData.match) {
	    		interaction.editReply(`> ${emojis.icon_error} ** | Erro!** ${interaction.user}, você **não possui** uma **partida em andamento**.`);
	
			return;
		}

		const matchData = (await db.matches.findById(userData.match))!;
		matchData.finalizedAt = Date.now();
		await matchData.save();

		userData.match = undefined;
		await userData.save();

	  	interaction.editReply(`> ${emojis.icon_ok} ** | Sucesso!** ${interaction.user}, você **saiu** da **partida**.`);
	},
});
