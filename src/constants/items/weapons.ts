import { WeaponItem } from "../../types/items";

const melee = (data: Omit<WeaponItem, "kind" | "type">) => ({ ...data, kind: "Weapon", type: "Melee" }) satisfies WeaponItem;
const projectile = (data: Omit<WeaponItem, "kind" | "type">) => ({ ...data, kind: "Weapon", type: "Projectile" }) satisfies WeaponItem;

export const weapons = {
	espada_ferro: melee({
		id: "espada_ferro",
		name: "Espada de Ferro",
		width: 2,
		height: 1,
		tier: "Common",
		damage: 10,
		cooldown: 1,
	}),
	adaga_ferro: melee({
		id: "adaga_ferro",
		name: "Adaga de Ferro",
		width: 1,
		height: 1,
		tier: "Common",
		damage: 5,
		cooldown: 0
	})
} as const;
