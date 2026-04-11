import { ItemId } from "./items";

export interface KitItem {
	id: ItemId;
	quantity: number;
}

export interface Kit {
	name: string;
	price: number;
	items: KitItem[];
}

export const kits: Record<string, Kit> = {
  guerreiro: {
    name: "Guerreiro",
    price: 500,
    items: [
      {id: "capacete_ferro", quantity: 1},
      {id: "peitoral_ferro", quantity: 1},
      {id: "botas_ferro", quantity: 1},
      {id: "espada_ferro", quantity: 1},
      {id: "escudo_madeira", quantity: 1}
    ]
  },
  assasino: {
    name: "Assasino",
    price: 500,
    items: [
      {id: "capuz_couro", quantity: 1},
      {id: "manto_couro", quantity: 1},
      {id: "botas_couro", quantity: 1},
      {id: "adaga_ferro", quantity: 1},
    ]
  }
};
