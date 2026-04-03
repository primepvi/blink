import { model, Schema } from "mongoose";

export interface UserData {
  _id: string,
  match?: Schema.Types.ObjectId,
}

const userSchema = new Schema<UserData>({
  _id: { type: String, required: true },
  match: { type: Schema.ObjectId }
});

export const userModel = model("users", userSchema);
