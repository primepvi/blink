import { ConsumableEffect, ConsumableItem } from "../../types/items";

const effect = (data: ConsumableEffect) => (data);

const buff = (data: Omit<ConsumableItem, "type" | "kind">) => ({ kind: "Consumable", type: "Buff", ...data } satisfies ConsumableItem);
const debuff = (data: Omit<ConsumableItem, "type" | "kind">) => ({ kind: "Consumable", type: "Debuff", ...data } satisfies ConsumableItem);
const instant = (data: Omit<ConsumableItem, "type" | "kind">) => ({ kind: "Consumable", type: "Instant", ...data } satisfies ConsumableItem);

export const consumables = {
	pocao_vida_pequena: instant({
		effects: [effect({ duration: 0, type: "Regeneration", value: 25 })],
		id: "pocao_vida_pequena",
		name: "Poção de Vida Pequena",
		weight: 1,
		tier: "Common"
	}),
	pocao_vida_media: instant({
		effects: [effect({ duration: 0, type: "Regeneration", value: 50 })],
		id: "pocao_vida_media",
		name: "Poção de Vida Média",
		weight: 1,
		tier: "Common"
	}),
	pocao_vida_grande: instant({
		effects: [effect({ duration: 0, type: "Regeneration", value: 100 })],
		id: "pocao_vida_grande",
		name: "Poção de Vida Grande",
		weight: 1,
		tier: "Uncommon"
	}),
} as const;
