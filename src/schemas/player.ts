import { model, Schema } from "mongoose";

export interface PlayerItemData {
	id: string;
	row: number;
	column: number;
}

export interface PlayerData {
	_id: Schema.Types.ObjectId;
	userId: string;
	items: PlayerItemData[];

	health: number;
	maxHealth: number;

	shield: number;
	maxShield: number;
}

const playerItemSchema = new Schema<PlayerItemData>({
	id: { type: String, required: true },
	row: { type: Number, required: true },
	column: { type: Number, required: true },
}, { _id: false });

const playerSchema = new Schema<PlayerData>({
	userId: { type: String, required: true },
	items: { type: [playerItemSchema], default: [] },
	health: { type: Number, default: 100 },
	maxHealth: { type: Number, default: 100 },
	shield: { type: Number, default: 0 },
	maxShield: { type: Number, default: 0 }
});

export const playerModel = model("players", playerSchema);
