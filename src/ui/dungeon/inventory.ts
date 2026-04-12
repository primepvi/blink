import { k, StringSelectMenuOptionData } from "kompozr";
import { PlayerData } from "../../schemas/player";
import { emojis } from "../../utils/emojis";
import { User } from "discord.js";
import { bot } from "../../bot";

export function uiDungeonInventoryPanel(user: User, playerData: PlayerData) {
	const grid = Array.from({ length: 5 ** 2 }, (_, i) => ({ id: "empty", row: Math.floor(i / 5), column: i % 5 }));
	for (const item of playerData.items) {
		const index = item.row * 5 + item.column;
		grid[index] = item;
	}

	const display = grid.reduce((acc, curr, i) => {
		const lineBreak = (i > 0 && i % 5 === 0) ? "\n> " : "";
		const icon = emojis[`icon_${curr.id}` as keyof typeof emojis];
		return `${acc}${lineBreak}${icon}`;
	}, "> ");


	const selectedItems = bot.transient.get<string[]>(`dg_inv_panel/${user.id}`) || [];

	const itemMenu = k.select.string({
		cid: "dg_inv_menu/" + user.id,
		max: 2,
		min: 1,
		options: playerData.items.map((slot, i) => ({
			value: `${slot.id}/${i}`,
			label: `[l: ${slot.row + 1}, c: ${slot.column + 1}] ${slot.id}`,
			description: "Clique aqui para selecionar este item.",
			emoji: emojis[`icon_${slot.id}` as keyof typeof emojis],
			default: selectedItems.includes(`${slot.id}/${i}`)
		} satisfies StringSelectMenuOptionData)),
		disabled: selectedItems.length > 0,
	});

	const row1 =
		k.row(
			k.button.danger({
				cid: `dg_inv_action/${user.id}/cancel`,
				emoji: emojis.icon_error.toString(),
				disabled: selectedItems.length == 0
			}),
			k.button.secondary({
				cid: `dg_inv_action/${user.id}/up`,
				emoji: emojis.icon_arrow_up.toString(),
				disabled: selectedItems.length != 1
			}),
			k.button.primary({
				cid: `dg_inv_action/${user.id}/swap`,
				emoji: emojis.icon_swap.toString(),
				disabled: selectedItems.length != 2
			})
		);

	const row2 =
		k.row(
			k.button.secondary({
				cid: `dg_inv_action/${user.id}/left`,
				emoji: emojis.icon_arrow_left.toString(),
				disabled: selectedItems.length != 1
			}),
			k.button.secondary({
				cid: `dg_inv_action/${user.id}/down`,
				emoji: emojis.icon_arrow_down.toString(),
				disabled: selectedItems.length != 1,
			}),
			k.button.secondary({
				cid: `dg_inv_action/${user.id}/right`,
				emoji: emojis.icon_arrow_right.toString(),
				disabled: selectedItems.length != 1
			}),
		);

	return k.layout([`# ${emojis.icon_bag} — Inventário`, display, k.separator.small, itemMenu, row1, row2]);
}
