import { Item, ItemKind } from "./items";

export type SectorType = "Shop" | "Mob" | "PvP";
export interface Sector {
  type: SectorType;
}

export interface Phase {
  index: number;
  sector: Sector;
  next?: Phase;
}

export interface SectorReward {
  coins: number
  items: Item[]
}

export interface ShopSector extends Sector {
  type: "Shop";
  shopName: string;
  shopKind: ItemKind;
  shopItems: Item[];
}

export type MobRank = "Minion" | "Elite" | "Boss";
export interface MobSector extends Sector {
  type: "Mob";
  mobId: string;
  mobName: string;
  rank: MobRank;
  level: number;
  reward: SectorReward;
}

export interface PvPSector extends Sector {
  type: "PvP";
  characterId: string;
  characterName: string;
  reward: SectorReward;
}
