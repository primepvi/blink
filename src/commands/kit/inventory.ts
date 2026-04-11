import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { kits } from "../../constants/kits";
import { db } from "../../schemas";
import { emojis } from "../../utils/emojis";
import { k, StringSelectMenuOptionData } from "kompozr";

export default createSubCommand({
	parent: "kit",
	name: "inventory",
	description: "Utilize esse comando para ver seus kits de equipamentos.",
	options: [],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		const userData = (await db.users.findById(interaction.user.id))!;
		if (!userData.kits) {
			interaction.editReply(`> ${emojis.icon_error} **| Erro!** ${interaction.user}, você **ainda não possui** um **kit de equipamento**.`);
			return;
		}

		const displayKits = Object.values(kits)
			.filter(kit => userData.kits.includes(kit.name.toLowerCase()))
		  .map(kit => `> ${emojis.icon_bag} **| ${kit.name}${userData.currentKit === kit.name.toLowerCase() ? " (\`equipado\`)" : ""}**: ${kit.items.map(item => emojis[`icon_${item.id}` as keyof typeof emojis]).join("")}`);

		const menu = k.select.string({
			cid: "kit_inventory_equip/" + interaction.user.id,
			placeholder: "Clique aqui para equipar um kit de equipamento",
			max: 1,
			min: 1,
			options: userData.kits.map(kit => ({
				value: kit,
				label: `Kit ${kit.charAt(0).toUpperCase() + kit.slice(1)}`,
				emoji: emojis.icon_bag,
				description: "Clique aqui para equipar este kit de equipamento."
			} satisfies StringSelectMenuOptionData))
		});

		interaction.editReply({
			components: k.layout([
				k.text(
					`${emojis.icon_info} **|** ${interaction.user}, veja **logo abaixo** seus **kits de equipamento**:`,
					...displayKits
				),
				k.separator.small,
				menu
			]), flags: ["IsComponentsV2"]
		});
	},
});
