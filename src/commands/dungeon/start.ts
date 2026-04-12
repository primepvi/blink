import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { emojis } from "../../utils/emojis";
import { generateSeed } from "../../utils/seed";
import { k } from "kompozr";
import { kits } from "../../constants/kits";

export default createSubCommand({
	parent: "dungeon",
	name: "start",
	description: "Utilize esse comando para entrar em uma dungeon.",
	options: [],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		const userData = (await db.users.findById(interaction.user.id))!;
		if (userData.currentMatch) {
			interaction.editReply(`> ${emojis.icon_error} **| Erro!** ${interaction.user}, você **já possui** uma **partida em andamento**.`);
			return;
		}

		if (!userData.currentKit) {
			interaction.editReply(`> ${emojis.icon_error} **| Erro!** ${interaction.user}, você **não equipou** um **kit de equipamento**.`);
			return;
		}

		const kitData = kits[userData.currentKit];
		const playerData = await db.players.create({
			userId: interaction.user.id,
			items: kitData.items.map((item, i) => ({ id: item.id, column: i % 5, row: Math.floor(i / 5) })),
		});

		const seed = generateSeed();

		const matchData = await db.matches.create({
			playerId: playerData._id,
			userId: interaction.user.id,
			seed,
		});

		userData.currentMatch = matchData._id;
		await userData.save();

		interaction.editReply(`> ${emojis.icon_ok} **| Sucesso!** ${interaction.user}, você **entrou na dungeon** \`${seed}\` com o **kit ${userData.currentKit}**.`);
	}
});
