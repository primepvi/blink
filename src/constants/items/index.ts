import { armors } from "./armors";
import { weapons } from "./weapons";

export type ArmorId = keyof typeof armors;
export type WeaponId = keyof typeof weapons;
export type ItemId = ArmorId | WeaponId;

export * from "./armors";
export * from "./weapons";

