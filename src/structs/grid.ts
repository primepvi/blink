import { RNG } from "./rng";
import { MatchData } from "../schemas/match";
import { MobSector, Phase, Sector, SectorReward, SectorType, ShopSector } from "../types/grid";
import { mobs } from "../prefabs/mobs";
import { Item, ItemKind } from "../types/items";
import { itemsRegistry } from "../prefabs";

export class Grid {
	private rng: RNG;
	public phase: Phase;

	public constructor(private seed: string, phase?: Phase) {
		this.rng = new RNG(seed);
		this.phase = phase || this.generate()!;
	}

	public getSectorByIndex(index: number) {
		let current: Phase = this.phase;

		while (current.next && current.index != index) {
			current = current.next;
		}

		if (current.index != index) {
			throw new Error("Invalid grid sector index has provided: " + index);
		}

		return current;
	}

	public generate(index = 0): Phase | undefined {
		if (index >= 25) { return; }

		return {
			index,
			sector: this.generateSector(index + 1)!,
			next: this.generate(index + 1),
		} satisfies Phase;
	}

	private generateSector(index: number) {
		const sectorType = this.rng.pick<SectorType>(["Mob", "Shop"]);
		switch (sectorType) {
			case "Mob": return this.generateMobSector(index);
			case "Shop": return this.generateShopSector(index);
		}
	}

	private generateMobSector(index: number) {
		const mobArray = Object.values(mobs);
		const { mobId, mobName, rank } = this.rng.pick(mobArray);

		return {
			type: "Mob",
			level: index,
			mobId,
			mobName,
			rank,
			reward: this.generateSectorReward(index)
		} satisfies MobSector;
	}

	private generateShopSector(index: number) {
		const shopKind: ItemKind = this.rng.pick<ItemKind>(["Armor", "Weapon", "Consumable", "Accessory"]);
		const shopName = `${shopKind} Shop`;
		const itemsArray = itemsRegistry.filter(item => item.kind === shopKind).toJSON();
		const shopItems = this.rng.sample<Item>(itemsArray, 3);
	
		return {
			type: "Shop",
			shopName,
			shopKind,
			shopItems,
		} satisfies ShopSector;
	}

	private generateSectorReward(index: number) {
		return { coins: this.rng.int(5, 5 * (index + 1)), items: [] } satisfies SectorReward;
	}
}
