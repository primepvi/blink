import { model, Schema } from "mongoose";

export interface MatchData {
  _id: Schema.Types.ObjectId;
  userId: string;
  floor: number;
  coins: number;
  createdAt: number;
  finalizedAt: number;
}

const matchSchema = new Schema<MatchData>({
  userId: { type: String, required: true },
  floor: { type: Number, default: 1 },
  coins: { type: Number, default: 10 },
  createdAt: { type: Number, default: Date.now },
  finalizedAt: { type: Number },
});

export const matchModel = model("matches", matchSchema);
