import { AccessoryAura, AccessoryEffect, AccessoryItem, Item, WeaponItem } from "../../types/items";

const accessory = (data: Omit<AccessoryItem, "kind">) => ({ ...data, kind: "Accessory" } satisfies AccessoryItem);
const aura = (data: AccessoryAura) => data;
const effect = (data: AccessoryEffect) => data;

export const accessories = {
	cogumelo_vermelho: accessory({
		id: "cogumelo_vermelho",
		name: "Cogumelo Vermelho",
		weight: 1,
		tier: "Common",
		auras: [
			aura({
				directions: ["left"],
				condition: (item: Item) => item.kind === "Weapon" && (item as WeaponItem).type === "Melee",
				effect: effect({
					kind: "stat",
					target: "damage",
					mode: "flat",
					value: 15,
				}),
			}),
		],
	}),

	cogumelo_verde: accessory({
		id: "cogumelo_verde",
		name: "Cogumelo Verde",
		weight: 1,
		tier: "Uncommon",
		auras: [
			aura({
				directions: ["left", "right"],
				condition: (item: Item) => item.kind === "Armor",
				effect: effect({
					kind: "stat",
					target: "defense",
					mode: "percent",
					value: 5,
				}),
			}),
		],
	}),
	olho_abismo: accessory({
		auras: [aura({
			directions: [],
			effect: effect({
				kind: "trigger",
				event: "onHit",
				chance: 25,
				apply: { kind: "status", status: "Stun", duration: 1, value: 0 }
			}),
			condition: (item: Item) => true
		})],
		id: "olho_abismo",
		name: "Olho do Abismo",
		weight: 1,
		tier: "Rare"
	})
} as const;
