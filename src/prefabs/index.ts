import { Collection } from "discord.js";
import { Item, WeaponItem, ArmorItem, ConsumableItem, AccessoryItem } from "../types/items";

import { weapons } from "./weapons";
import { armors } from "./armors";
import { consumables } from "./consumables";
import { accessories } from "./accessories";

function toSortedCollection<T extends Item>(record: Record<string, T>) {
  return new Collection<string, T>(
    Object.entries(record).sort(([a], [b]) => a.localeCompare(b))
  )
}

export const weaponsRegistry = toSortedCollection<WeaponItem>(weapons)
export const armorsRegistry = toSortedCollection<ArmorItem>(armors)
export const consumablesRegistry = toSortedCollection<ConsumableItem>(consumables)
export const accessoriesRegistry = toSortedCollection<AccessoryItem>(accessories)

export const itemsRegistry = new Collection<string, Item>()
  .concat(weaponsRegistry)
  .concat(armorsRegistry)
  .concat(consumablesRegistry)
  .concat(accessoriesRegistry)
