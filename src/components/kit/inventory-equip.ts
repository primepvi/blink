import { StringSelectMenuInteraction, CacheType, ButtonInteraction } from "discord.js";
import { ComponentKind, createComponent } from "../../factory/component";
import { db } from "../../schemas";
import { emojis } from "../../utils/emojis";

export default createComponent({
	type: ComponentKind.StringSelect,
	name: "kit_inventory_equip",
	authorOnly: true,
	async execute(interaction: StringSelectMenuInteraction<CacheType>) {
		await interaction.deferReply({ flags: ["Ephemeral"] });

		const userData = (await db.users.findById(interaction.user.id))!;
		userData.currentKit = interaction.values[0];
		await userData.save();

		interaction.editReply(`> ${emojis.icon_ok} **| Sucesso!** ${interaction.user}, você **equipou** o **kit ${interaction.values[0]}**.`)
	}
});
