import { StringSelectMenuInteraction, CacheType } from "discord.js";
import { ComponentKind, createComponent } from "../../factory/component";
import { db } from "../../schemas";
import { emojis } from "../../utils/emojis";
import { bot } from "../../bot";
import { uiDungeonInventoryPanel } from "../../ui/dungeon/inventory";

export default createComponent({
	type: ComponentKind.StringSelect,
	name: "dg_inv_menu",
	authorOnly: true,
  async execute(interaction: StringSelectMenuInteraction<CacheType>, args: string[]) {
		const userData = (await db.users.findById(interaction.user.id))!;
		const matchData = (await db.matches.findById(userData.currentMatch!))!;
		const playerData = (await db.players.findById(matchData.playerId))!;

		bot.transient.set(`dg_inv_panel/${interaction.user.id}`, interaction.values);
		const components = uiDungeonInventoryPanel(interaction.user, playerData);

		await interaction.update({ components, flags: ["IsComponentsV2"] });
	}
});
