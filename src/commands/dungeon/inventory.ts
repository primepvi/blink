import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { emojis } from "../../utils/emojis";
import { uiDungeonInventoryPanel } from "../../ui/dungeon/inventory";

export default createSubCommand({
	parent: "dungeon",
	name: "inventory",
	description: "Utilize esse comando para ver seu inventário.",
	options: [],
	async execute(interaction: ChatInputCommandInteraction) {
		if (!interaction.channel?.isSendable())
			return;

		await interaction.deferReply();

		const userData = (await db.users.findById(interaction.user.id))!;
		if (!userData.currentMatch) {
			interaction.editReply(`> ${emojis.icon_error} **| Erro!** ${interaction.user}, você **não possui** uma **partida em andamento**.`);
			return;
		}

		const matchData = (await db.matches.findById(userData.currentMatch!))!;
		const playerData = (await db.players.findById(matchData.playerId))!;

		const components = uiDungeonInventoryPanel(interaction.user, playerData);

		await interaction.editReply({ components, flags: ["IsComponentsV2"] });
	}
})
