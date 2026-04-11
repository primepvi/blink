import { model, Schema } from "mongoose";

export interface MatchData {
  _id: Schema.Types.ObjectId;
  userId: string;
  playerId: Schema.Types.ObjectId;
  seed: string;
  createdAt: number;
  finalizedAt?: number;
}

const matchSchema = new Schema<MatchData>({
  userId: { type: String, required: true },
  playerId: { type: Schema.ObjectId, required: true },
  seed: { type: String, required: true },
  createdAt: { type: Number, default: Date.now },
  finalizedAt: { type: Number }
});

export const matchModel = model("matches", matchSchema);
