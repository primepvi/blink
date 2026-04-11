export type ItemKind = "Armor" | "Weapon" | "Consumable" | "Accessory";
export type ItemTier = "Common" | "Uncommon"

export interface Item {
	id: string;
	kind: ItemKind;
	name: string;
	width: number;
	height: number;
	tier: ItemTier;
}

export type ArmorType = "Helmet" | "Boots" | "Legs" | "Chestplate" | "Shield";
export interface ArmorItem extends Item {
	kind: "Armor";
	type: ArmorType;
	defense: number;
}

export type WeaponType = "Magic" | "Melee" | "Projectile";
export interface WeaponItem extends Item {
	kind: "Weapon";
	type: WeaponType;
  damage: number;
  cooldown: number;
}

export type ConsumableType = "Buff" | "Debuff" | "Instant";
export interface ConsumableEffect {
	type: "Regeneration" | "Damage" | "Poison" | "Burn" | "Shield" | "SpeedUp"
	duration: number
	value: number
}
export interface ConsumableItem extends Item {
	kind: "Consumable"
	type: ConsumableType
	effects: ConsumableEffect[]
}

export type GridDirection =
	| "top-left" | "top" | "top-right"
	| "left" | "right"
	| "bottom-left" | "bottom" | "bottom-right"

export type AccessoryCondition = (item: Item) => boolean;

export type AccessoryEffectTarget =
	| "damage"
	| "defense"
	| "value"
	| "duration"

export type AccessoryEffectMode =
	| "flat"
	| "percent"

export interface AccessoryEffect {
	target: AccessoryEffectTarget
	mode: AccessoryEffectMode
	value: number
	condition: AccessoryCondition
}

export interface AccessoryAura {
	directions: GridDirection[]
	effect: AccessoryEffect
}

export interface AccessoryItem extends Item {
	kind: "Accessory"
	auras: AccessoryAura[]
}
