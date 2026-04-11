import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { k } from "kompozr";
import { emojis } from "../../utils/emojis";
import { kits } from "../../constants/kits";
import { db } from "../../schemas";

export default createSubCommand({
	parent: "kit",
	name: "shop",
	description: "Utilize esse comando para ver a loja de kits de equipamento.",
	options: [],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();
		const userData = (await db.users.findById(interaction.user.id))!;

		const items = Object.values(kits)
		  .filter(kit => !userData.kits.includes(kit.name.toLowerCase()))
			.map(kit => [k.text(`${emojis.icon_bag} **| ${kit.name}**: \n> -# **Preço:** ${emojis.icon_credits} \`${kit.price}\` **Créditos**\n> -# **Itens:** ${kit.items.map(item => emojis[`icon_${item.id}` as keyof typeof emojis]).join("")}`), k.separator.smallHidden]) || [k.text("> ```Nenhum kit disponível...```")];

		const layout = k.layout([
			k.text(
				`# ${emojis.icon_shop} — Loja de Kits`,
				`> ${emojis.icon_info} **|** ${interaction.user}, utilize **/kit buy [id]** para **comprar** um **kit de equipamentos**.`
			),
			k.separator.small,
			...items.flat()
		]);

		interaction.editReply({ components: layout, flags: ["IsComponentsV2"] });
	},
});
