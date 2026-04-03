import { ApplicationCommandOptionType, ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { generateSeed, dailySeed } from "../../utils/seed";

export default createSubCommand({
	parent: "match",
	name: "start",
	description: "Utilize este comando para iniciar uma partida.",
	options: [{
		type: ApplicationCommandOptionType.String,
		name: "seed",
		description: "Insira a seed da partida aqui.",
	}],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		const userData = (await db.users.findById(interaction.user.id))!;
		if (userData.match) {
			interaction.editReply("Você já tem uma partida em andamento.");
			return;
		}

		const inputSeed = interaction.options.getString("seed", false);
		const seed = inputSeed ?
			inputSeed === "daily" ? dailySeed() : inputSeed
			: generateSeed();

		const matchData = await db.matches.create({
			userId: interaction.user.id,
			seed: seed
		});

		userData.match = matchData._id;
		await userData.save();

		interaction.editReply("Você iniciou uma partida com sucesso.");
	},
});
