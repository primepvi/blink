import { model, Schema } from "mongoose";

export interface MatchData {
  _id: Schema.Types.ObjectId;
  userId: string;
  seed: string;
  sector: number;
  movements: number[];
  coins: number;
  createdAt: number;
  finalizedAt: number;
}

const matchSchema = new Schema<MatchData>({
  userId: { type: String, required: true },
  seed: { type: String, required: true },
  sector: { type: Number, default: 1 },
  movements: { type: [Number], default: [] },
  coins: { type: Number, default: 10 },
  createdAt: { type: Number, default: Date.now },
  finalizedAt: { type: Number },
});

export const matchModel = model("matches", matchSchema);
