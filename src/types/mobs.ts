import { ItemId } from "../constants/items";

export interface MobDrop {
	itemId: ItemId;
	quantity: { min: number, max: number },
	chance: number;
};

export interface Mob {
	id: string;
	name: string;
	iconURL: string;
	maxHealth: number;
	maxShield: number;
	drops: MobDrop[];
	reward: { min: number, max: number };
};
