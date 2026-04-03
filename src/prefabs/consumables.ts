import { ConsumableItem } from "../types/items"

export const consumables = {
  // Common 
  nano_patch: {
    id: "nano_patch",
    kind: "Consumable",
    name: "Nano Patch",
    tier: "Common",
    type: "Instant",
    effects: [{ type: "Regeneration", duration: 0, value: 30 }],
  },
  toxin_vial: {
    id: "toxin_vial",
    kind: "Consumable",
    name: "Toxin Vial",
    tier: "Common",
    type: "Debuff",
    effects: [{ type: "Poison", duration: 3, value: 8 }],
  },

  // Uncommon
  burn_grenade: {
    id: "burn_grenade",
    kind: "Consumable",
    name: "Burn Grenade",
    tier: "Uncommon",
    type: "Debuff",
    effects: [{ type: "Burn", duration: 4, value: 12 }],
  },
  regen_stim: {
    id: "regen_stim",
    kind: "Consumable",
    name: "Regen Stim",
    tier: "Uncommon",
    type: "Buff",
    effects: [{ type: "Regeneration", duration: 3, value: 15 }],
  },

  // Rare 
  combat_stim: {
    id: "combat_stim",
    kind: "Consumable",
    name: "Combat Stim",
    tier: "Rare",
    type: "Buff",
    effects: [
      { type: "Regeneration", duration: 2, value: 15 },
      { type: "Damage", duration: 2, value: 20 },
    ],
  },
  void_poison: {
    id: "void_poison",
    kind: "Consumable",
    name: "Void Poison",
    tier: "Rare",
    type: "Debuff",
    effects: [
      { type: "Poison", duration: 5, value: 15 },
      { type: "Burn", duration: 2, value: 10 },
    ],
  },

  // Legendary
  singularity_shot: {
    id: "singularity_shot",
    kind: "Consumable",
    name: "Singularity Shot",
    tier: "Legendary",
    type: "Instant",
    effects: [
      { type: "Damage", duration: 0, value: 100 },
      { type: "Burn", duration: 3, value: 20 },
    ],
  },
} satisfies Record<string, ConsumableItem>
