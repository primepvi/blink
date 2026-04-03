import { matchModel } from "./match";
import { userModel } from "./user";

export const db = {
  matches: matchModel,
  users: userModel
};
