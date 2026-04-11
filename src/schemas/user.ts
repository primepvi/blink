import { model, Schema } from "mongoose";

export interface UserData {
	_id: string;

	kits: string[];
	credits: number;

	currentKit?: string;
	currentMatch?: string;
}

const userSchema = new Schema<UserData>({
	_id: { type: String, required: true },
	kits: { type: [String], default: [] },
	credits: { type: Number, default: 500 },
	currentKit: { type: String },
	currentMatch: { type: String },
});

export const userModel = model("users", userSchema);
