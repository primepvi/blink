import { WeaponItem } from "../../types/items";

const melee = (data: Omit<WeaponItem, "kind" | "type">) => ({ ...data, kind: "Weapon", type: "Melee" }) satisfies WeaponItem;
const projectile = (data: Omit<WeaponItem, "kind" | "type">) => ({ ...data, kind: "Weapon", type: "Projectile" }) satisfies WeaponItem;

export const weapons = {
	espada_ferro: melee({
		id: "espada_ferro",
		name: "Espada de Ferro",
		weight: 1,
		tier: "Common",
		damage: 10,
		cooldown: 1,
	}),
	adaga_ferro: melee({
		id: "adaga_ferro",
		name: "Adaga de Ferro",
		weight: 1,
		tier: "Common",
		damage: 5,
		cooldown: 0
	}),
	espada_curva_ferro: melee({
		id: "espada_curva_ferro",
		name: "Espada Curva de Ferro",
		weight: 1,
		tier: "Common",
		damage: 20,
		cooldown: 0
	}),
	machado_batalha_ferro: melee({
		id: "machado_batalha_ferro",
		name: "Machado de Batalha de Ferro",
		weight: 4,
		tier: "Common",
		damage: 50,
		cooldown: 4
	}),
	foice_ferro: melee({
		id: "foice_ferro",
		name: "Foice de Ferro",
		weight: 1,
		tier: "Common",
		damage: 25,
		cooldown: 1
	}),

	// bronze
	espada_bronze: melee({
		id: "espada_bronze",
		name: "Espada de Bronze",
		weight: 1,
		tier: "Uncommon",
		damage: 30,
		cooldown: 1,
	}),
	adaga_bronze: melee({
		id: "adaga_bronze",
		name: "Adaga de Bronze",
		weight: 1,
		tier: "Uncommon",
		damage: 25,
		cooldown: 0
	}),
	espada_curva_bronze: melee({
		id: "espada_curva_bronze",
		name: "Espada Curva de Bronze",
		weight: 1,
		tier: "Uncommon",
		damage: 40,
		cooldown: 0
	}),
	machado_batalha_bronze: melee({
		id: "machado_batalha_bronze",
		name: "Machado de Batalha de Bronze",
		weight: 4,
		tier: "Uncommon",
		damage: 70,
		cooldown: 4
	}),
	foice_bronze: melee({
		id: "foice_bronze",
		name: "Foice de Bronze",
		weight: 1,
		tier: "Uncommon",
		damage: 45,
		cooldown: 1
	}),
} as const;
