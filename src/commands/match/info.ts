import { ApplicationCommandOptionType, ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { k } from "kompozr";
import { bot } from "../../bot";
import { hashSeed } from "../../utils/seed";

export default createSubCommand({
	parent: "match",
	name: "info",
	description: "Utilize este comando para ver informações da partida atual.",
	options: [{
		type: ApplicationCommandOptionType.String,
		name: "id",
		description: "Insira aqui o id da partida.",
	}],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		let matchId = interaction.options.getString("id", false);

		if (!matchId) {
			const userData = (await db.users.findById(interaction.user.id))!;
			if (!userData.match) {
				interaction.editReply({
					components: k.layout(["Você não tem uma partida em andamento."]),
					flags: ["IsComponentsV2"]
				});

				return;
			}

			matchId = userData.match.toString();
		}

		const matchData = await db.matches.findById(matchId);
		if (!matchData) {
			interaction.editReply({
				components: k.layout([`Não foi possível encontrar informações da partida: \`${matchId}\``]),
				flags: ["IsComponentsV2"]
			});

			return;
		}

		const startedTimestamp = `<t:${Math.floor(matchData.createdAt / 1000)}:R>`;
		const finalizedTimestamp = matchData.finalizedAt ? `<t:${Math.floor(matchData.finalizedAt / 1000)}:R>` : "Em Andamento";

		const player = await bot.users.fetch(matchData.userId);

		interaction.editReply({
			components: k.layout([k.text(
				`- ID: ${matchData._id}`,
				`- Player: ${player.username} [\`${player.id}\`]`,
				`- Seed: ${matchData.seed} [${hashSeed(matchData.seed)}]`,
				`- Iniciado: ${startedTimestamp}`,
				`- Finalizado: ${finalizedTimestamp}`
			)]),
			flags: ["IsComponentsV2"]
		});
	},
});
