import { Collection } from "discord.js";
import { Item, WeaponItem, ArmorItem, ConsumableItem, AccessoryItem } from "../types/items";

import { weapons } from "./weapons";
import { armors } from "./armors";
import { consumables } from "./consumables";
import { accessories } from "./accessories";

export const weaponsRegistry = new Collection<string, WeaponItem>(Object.entries(weapons));
export const armorsRegistry = new Collection<string, ArmorItem>(Object.entries(armors));
export const consumablesRegistry = new Collection<string, ConsumableItem>(Object.entries(consumables));
export const accessoriesRegistry = new Collection<string, AccessoryItem>(Object.entries(accessories));

export const itemsRegistry = new Collection<string, Item>()
  .concat(weaponsRegistry)
  .concat(armorsRegistry)
  .concat(consumablesRegistry)
  .concat(accessoriesRegistry);
