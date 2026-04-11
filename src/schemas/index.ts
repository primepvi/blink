import { matchModel } from "./match";
import { playerModel } from "./player";
import { userModel } from "./user";

export const db = {
  users: userModel,
  matches: matchModel,
  players: playerModel
};
