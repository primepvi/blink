import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";

export default createSubCommand({
    parent: "match",
    name: "start",
    description: "Utilize este comando para iniciar uma partida.",
    options: [],
    async execute(interaction: ChatInputCommandInteraction) {
      const userData = (await db.users.findById(interaction.user.id))!;
      if (userData.match) {
	interaction.reply("Você já tem uma partida em andamento.");
	return;
      }

      const match = await db.matches.create({
	userId: interaction.user.id
      });

      userData.match = match._id;
      await userData.save();

      interaction.reply("Você iniciou uma partida com sucesso.");
    },
});
