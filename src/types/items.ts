export type ItemKind = "Armor" | "Weapon" | "Consumable" | "Accessory" | "Misc";
export type ItemTier = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

export interface Item {
	id: string;
	kind: ItemKind;
	name: string;
	weight: number;
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

export interface StatEffect {
	kind: "stat";
	target: "damage" | "defense" | "cooldown" | "duration" | "value";
	mode: "flat" | "percent";
	value: number;
}

export interface StatusEffect {
	kind: "status";
	status: "Burn" | "Poison" | "Stun" | "Slow" | "Blind";
	duration: number;
	value: number;
}

export interface TransformEffect {
	kind: "transform";
	replaceField: "type" | "tier";
	replaceValue: string;
}

export type TriggerApply =
	| StatEffect
	| StatusEffect
	| TransformEffect;

export type TriggerEvent =
	| "onHit"
	| "onKill"
	| "onLowHp"
	| "onTurnStart"
	| "onTurnEnd"
	| "onEquip"
	| "onConsumableUse";

export interface TriggerEffect {
	kind: "trigger";
	event: TriggerEvent;
	threshold?: number;   // in "onLowHp", ex: 0.3 = 30%
	chance?: number;      // in "onHit", ex: 0.25 = 25%
	apply: TriggerApply;
}

export type AccessoryEffect =
	| StatEffect
	| TriggerEffect
	| TransformEffect;

export interface AccessoryAura {
	directions: GridDirection[]
	effect: AccessoryEffect,
	condition: AccessoryCondition
}

export interface AccessoryItem extends Item {
	kind: "Accessory"
	auras: AccessoryAura[]
}
