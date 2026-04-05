import { ApplicationCommandOptionType, ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { k } from "kompozr";
import { bot } from "../../bot";
import { hashSeed } from "../../utils/seed";
import { emojis } from "../../utils/emojis";
import { Schema } from "mongoose";
import { MatchData } from "../../schemas/match";

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
				interaction.editReply(`> ${emojis.icon_error} ** | Erro!** ${interaction.user}, você **não possui** uma **partida em andamento**.`);
				return;
			}

			matchId = userData.match.toString();
		}

		let matchData: MatchData;
		try {
			matchData = (await db.matches.findById(matchId))!;
		} catch (err) {
			interaction.editReply(`> ${emojis.icon_error} ** | Erro!** ${interaction.user}, não **foi possível** encontrar **informações** dessa **partida**.`);

			return;
		}

		const startedTimestamp = `<t:${Math.floor(matchData.createdAt / 1000)}:R>`;
		const finalizedTimestamp = matchData.finalizedAt ? `<t:${Math.floor(matchData.finalizedAt / 1000)}:R>` : "`Em Andamento`";

		const player = await bot.users.fetch(matchData.userId);

		interaction.editReply({
			components: [k.text(

				`## ${emojis.icon_game} | BLINK — Informações da Partida`,
				`> -# ${interaction.user}, veja **logo abaixo** as **informações da partida** `),
			k.separator.small,
			k.text(
				`> ${emojis.icon_id} **| Id**: \`${matchData._id}\``,
				`> ${emojis.icon_user} **| Player**: \`${player.username}\` **\`[${player.id}]\`**`,
				`> ${emojis.icon_leaf} **| Seed**: \`${matchData.seed}\` **\`[${hashSeed(matchData.seed)}]\`**`,
				`> ${emojis.icon_clock} **| Iniciado**: ${startedTimestamp}`,
				`> ${emojis.icon_clock} **| Finalizado**: ${finalizedTimestamp}`
			)],
			flags: ["IsComponentsV2"]
		});
	},
});
