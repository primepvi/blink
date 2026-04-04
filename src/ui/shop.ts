import { k } from "kompozr";
import { ShopSector } from "../types/grid";
import { ItemTier } from "../types/items";

const ITEM_PRICE_RECORD: Record<ItemTier, number> = {
    Common: 5,
    Uncommon: 10,
    Rare: 15,
    Epic: 25,
    Legendary: 50
};

export function createShopComponent(index: number, sector: ShopSector) {
  const container = k.container({
    color: "Green",
    components: [k.text(
      `## ${sector.shopName}`,
      ...sector.shopItems.map(item => `- ${item.name} [\`${item.id}\`]: **${ITEM_PRICE_RECORD[item.tier]} Coins**`)
    )]
  });

  return container;
}
