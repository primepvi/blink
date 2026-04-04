import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { Grid } from "../../structs/grid";

export default createSubCommand({
	parent: "grid",
	name: "advance",
	description: "Utilize esse comando para avançar para o próximo setor do grid.",
	options: [],
        async execute(interaction: ChatInputCommandInteraction) {
	  await interaction.deferReply();
	  
	  const userData = (await db.users.findById(interaction.user.id))!;
	  if (!userData.match) {
	    interaction.editReply("Você não tem uma partida em andamento.");
	    return;
	  }

	  const matchData = (await db.matches.findById(userData.match))!;

	  const grid = new Grid(matchData.seed);
	  const phase = grid.getSectorByIndex(matchData.sector);
	  if (!phase.next) {
	    interaction.editReply("Você chegou ao final do grid");  
	    return;
	  }

	  matchData.sector++;
	  await matchData.save();

	  interaction.editReply("Você avançou um setor.");
	},
});
