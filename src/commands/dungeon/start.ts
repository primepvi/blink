import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { emojis } from "../../utils/emojis";
import { generateSeed } from "../../utils/seed";
import { k } from "kompozr";

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

		const menu = k.select.string({
			cid: "dungeon_kit_menu/" + interaction.user.id,
			options: [{
				label: "Kit Guerreiro",
				value: "guerreiro",
				description: "Clique aqui para selecionar o kit guerreiro.",
				emoji: emojis.icon_bag
			},
			{
				label: "Kit Assasino",
				value: "assasino",
				description: "Clique aqui para selecionar o kit assasino.",
				emoji: emojis.icon_bag
			}],
			min: 1,
			max: 1,
		});

		interaction.editReply({
			components: k.layout([
				k.text(
					`> ${emojis.icon_info} **|** ${interaction.user}, escolha um **kit de equipamento** para **entrar na dungeon**:`
				),
				k.separator.small,
				k.text(
					`### ${emojis.icon_bag} **| Kit Guerreiro:**`,
					`> - \`1x\` ${emojis.icon_capacete_ferro} **| Capacete de Ferro**`,
					`> - \`1x\` ${emojis.icon_peitoral_ferro} **| Peitoral de Ferro**`,
					`> - \`1x\` ${emojis.icon_botas_ferro} **| Botas de Ferro**`,
					`> - \`1x\` ${emojis.icon_espada_ferro} **| Espada de Ferro**`,
					`> - \`5x\` ${emojis.icon_pocao_vida} **| Poção de Vida Pequena**`,
				),
				k.separator.small,
				k.text(
					`### ${emojis.icon_bag} **| Kit Assasino:**`,
					`> - \`1x\` ${emojis.icon_capuz_couro} **| Capacete de Couro**`,
					`> - \`1x\` ${emojis.icon_manto_couro} **| Manto de Couro**`,
					`> - \`1x\` ${emojis.icon_botas_couro} **| Botas de Couro**`,
					`> - \`1x\` ${emojis.icon_adaga_ferro} **| Adaga de Ferro**`,
					`> - \`5x\` ${emojis.icon_pocao_vida} **| Poção de Vida Pequena**`,
				),
				menu
			]),
			flags: ["IsComponentsV2"]
		});

	}
});
