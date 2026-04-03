import { WeaponItem } from "../types/items"

export const weapons = {
  // Common
  rusted_blade: {
    id: "rusted_blade",
    kind: "Weapon",
    name: "Rusted Blade",
    tier: "Common",
    type: "Melee",
    damage: 12,
  },
  pulse_pistol: {
    id: "pulse_pistol",
    kind: "Weapon",
    name: "Pulse Pistol",
    tier: "Common",
    type: "Magic",
    damage: 10,
  },
  iron_knuckles: {
    id: "iron_knuckles",
    kind: "Weapon",
    name: "Iron Knuckles",
    tier: "Common",
    type: "Melee",
    damage: 9,
  },

  // Uncommon
  plasma_edge: {
    id: "plasma_edge",
    kind: "Weapon",
    name: "Plasma Edge",
    tier: "Uncommon",
    type: "Melee",
    damage: 22,
  },
  arc_rifle: {
    id: "arc_rifle",
    kind: "Weapon",
    name: "Arc Rifle",
    tier: "Uncommon",
    type: "Magic",
    damage: 20,
  },
  shock_baton: {
    id: "shock_baton",
    kind: "Weapon",
    name: "Shock Baton",
    tier: "Uncommon",
    type: "Melee",
    damage: 18,
  },

  // Rare
  void_lance: {
    id: "void_lance",
    kind: "Weapon",
    name: "Void Lance",
    tier: "Rare",
    type: "Magic",
    damage: 38,
  },
  phase_blade: {
    id: "phase_blade",
    kind: "Weapon",
    name: "Phase Blade",
    tier: "Rare",
    type: "Melee",
    damage: 35,
  },
  scatter_cannon: {
    id: "scatter_cannon",
    kind: "Weapon",
    name: "Scatter Cannon",
    tier: "Rare",
    type: "Magic",
    damage: 30,
  },

  // Epic
  neural_disruptor: {
    id: "neural_disruptor",
    kind: "Weapon",
    name: "Neural Disruptor",
    tier: "Epic",
    type: "Magic",
    damage: 55,
  },
  gravity_cleaver: {
    id: "gravity_cleaver",
    kind: "Weapon",
    name: "Gravity Cleaver",
    tier: "Epic",
    type: "Melee",
    damage: 60,
  },

  // Legendary 
  singularity_blade: {
    id: "singularity_blade",
    kind: "Weapon",
    name: "Singularity Blade",
    tier: "Legendary",
    type: "Melee",
    damage: 90,
  },
  void_caster: {
    id: "void_caster",
    kind: "Weapon",
    name: "Void Caster",
    tier: "Legendary",
    type: "Magic",
    damage: 85,
  },
} satisfies Record<string, WeaponItem>
