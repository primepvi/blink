import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { Grid } from "../../structs/grid";

export default createSubCommand({
	parent: "grid",
	name: "sector",
	description: "Utilize esse comando para interagir com o setor atual do grid.",
	options: [],
        async execute(interaction: ChatInputCommandInteraction) {
	  await interaction.deferReply();
	  
	  const userData = (await db.users.findById(interaction.user.id))!;
	  if (!userData.match) {
	    interaction.editReply("Você não tem uma partida em andamento.");
	    return;
	  }

	  const matchData = (await db.matches.findById(userData.match))!;

	  const grid = new Grid(matchData.seed, matchData.phase);
	  const { sector } = grid.getSectorByIndex(matchData.sector);
	  interaction.editReply(`Sector: ${matchData.sector}\n Data: ${JSON.stringify(sector, null, 2)}`);
	},
});
