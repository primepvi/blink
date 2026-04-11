import { ArmorItem } from "../../types/items";

const helmet = (data: Omit<ArmorItem, "kind" | "type">) => ({ ...data, kind: "Armor", type: "Helmet" }) satisfies ArmorItem;
const chestplate = (data: Omit<ArmorItem, "kind" | "type">) => ({ ...data, kind: "Armor", type: "Chestplate" }) satisfies ArmorItem;
const boots = (data: Omit<ArmorItem, "kind" | "type">) => ({ ...data, kind: "Armor", type: "Boots" }) satisfies ArmorItem;
const shield = (data: Omit<ArmorItem, "kind" | "type">) => ({ ...data, kind: "Armor", type: "Shield" }) satisfies ArmorItem;

export const armors = {
	// Armadura Leve de Couro
	capuz_couro: helmet({
		id: "capuz_couro",
		name: "Capuz de Couro",
		width: 1,
		height: 1,
		tier: "Common",
		defense: 5,
	}),
	manto_couro: chestplate({
		id: "manto_couro",
		name: "Manto de Couro",
		width: 1,
		height: 1,
		tier: "Common",
		defense: 10,
	}),
	botas_couro: boots({
		id: "botas_couro",
		name: "Botas de Couro",
		width: 1,
		height: 1,
		tier: "Common",
		defense: 5,
	}),

	// Armadura Pesada de Ferro
	capacete_ferro: helmet({
		id: "capacete_ferro",
		name: "Capacete de Ferro",
		width: 1,
		height: 1,
		tier: "Common",
		defense: 10,
	}),
	peitoral_ferro: chestplate({
		id: "peitoral_ferro",
		name: "Peitoral de Ferro",
		width: 2,
		height: 2,
		tier: "Common",
		defense: 20,
	}),
	botas_ferro: boots({
		id: "botas_ferro",
		name: "Botas de Ferro",
		width: 1,
		height: 1,
		tier: "Common",
		defense: 10,
	}),
	escudo_madeira: shield({
		id: "escudo_madeira",
		name: "Escudo de Madeira",
		width: 1,
		height: 1,
		tier: "Common",
		defense: 10,
	})
} as const;
