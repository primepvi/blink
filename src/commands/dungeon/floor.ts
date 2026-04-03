import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";

export default createSubCommand({
	parent: "dungeon",
	name: "floor",
	description: "Utilize esse comando para interagir com o andar atual da dungeon.",
	options: [],
        async execute(interaction: ChatInputCommandInteraction) {
	  await interaction.deferReply();
	  
	  const userData = (await db.users.findById(interaction.user.id))!;
	  if (!userData.match) {
	    interaction.editReply("Você não tem uma partida em andamento.");
	    return;
	  }

	  const matchData = (await db.matches.findById(userData.match))!;
	  interaction.editReply(`Floor: ${matchData.floor}`);
	},
});
