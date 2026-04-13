import { accessories } from "./accessories";
import { armors } from "./armors";
import { weapons } from "./weapons";

export type ArmorId = keyof typeof armors;
export type WeaponId = keyof typeof weapons;
export type AccessoryId = keyof typeof accessories;
export type ItemId = ArmorId | WeaponId | AccessoryId;

export * from "./armors";
export * from "./weapons";
export * from "./accessories";

