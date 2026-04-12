import { StringSelectMenuInteraction, CacheType } from "discord.js";
import { ComponentKind, createComponent } from "../../factory/component";
import { db } from "../../schemas";
import { emojis } from "../../utils/emojis";
import { bot } from "../../bot";
import { uiDungeonInventoryPanel } from "../../ui/dungeon/inventory";

export default createComponent({
	type: ComponentKind.StringSelect,
	name: "dg_inv_action",
	authorOnly: true,
	async execute(interaction: StringSelectMenuInteraction<CacheType>, args: string[]) {
		const [actionType, ..._componentArgs] = args;

		const userData = (await db.users.findById(interaction.user.id))!;
		const matchData = (await db.matches.findById(userData.currentMatch!))!;
		const playerData = (await db.players.findById(matchData.playerId))!;

		const [firstItem, secondItem] = bot.transient.get<string[]>(`dg_inv_panel/${interaction.user.id}`)!;
		const [firstItemId, firstItemIndex] = firstItem.split("/");
		const firstItemData = playerData.items[Number(firstItemIndex)];


		if (actionType === "cancel") {
			bot.transient.set(`dg_inv_panel/${interaction.user.id}`, []);
		} else if (actionType === "swap") {
			const [_secondItemId, secondItemIndex] = secondItem.split("/");
			const secondItemData = playerData.items[Number(secondItemIndex)];
			const firstItemDataAux = { column: firstItemData.column, row: firstItemData.row };

			firstItemData.row = secondItemData.row;
			firstItemData.column = secondItemData.column;

			secondItemData.row = firstItemDataAux.row;
			secondItemData.column = firstItemDataAux.column;

			await playerData.save();
		} else if (actionType == "left") {
			firstItemData.column = Math.max(0, firstItemData.column - 1);
			await playerData.save();
		} else if (actionType == "right") {
			firstItemData.column = Math.min(4, firstItemData.column + 1);
			await playerData.save();
		} else if (actionType == "up") {
			firstItemData.row = Math.max(0, firstItemData.row - 1);
			await playerData.save();
		} else if (actionType == "down") {
			firstItemData.row = Math.min(4, firstItemData.row + 1);
			await playerData.save();
		}

		const components = uiDungeonInventoryPanel(interaction.user, playerData);
		await interaction.update({ components, flags: ["IsComponentsV2"] });
	}
});
