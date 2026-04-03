import { ArmorItem } from "../types/items"

export const armors = {
  // Common
  scrap_helmet: {
    id: "scrap_helmet",
    kind: "Armor",
    name: "Scrap Helmet",
    tier: "Common",
    type: "Helmet",
    defense: 5,
  },
  torn_boots: {
    id: "torn_boots",
    kind: "Armor",
    name: "Torn Boots",
    tier: "Common",
    type: "Boots",
    defense: 4,
  },
  salvaged_legs: {
    id: "salvaged_legs",
    kind: "Armor",
    name: "Salvaged Legs",
    tier: "Common",
    type: "Legs",
    defense: 6,
  },
  wire_vest: {
    id: "wire_vest",
    kind: "Armor",
    name: "Wire Vest",
    tier: "Common",
    type: "Chestplate",
    defense: 8,
  },

  // Uncommon
  carbon_helmet: {
    id: "carbon_helmet",
    kind: "Armor",
    name: "Carbon Helmet",
    tier: "Uncommon",
    type: "Helmet",
    defense: 12,
  },
  tactical_boots: {
    id: "tactical_boots",
    kind: "Armor",
    name: "Tactical Boots",
    tier: "Uncommon",
    type: "Boots",
    defense: 10,
  },
  carbon_legs: {
    id: "carbon_legs",
    kind: "Armor",
    name: "Carbon Legs",
    tier: "Uncommon",
    type: "Legs",
    defense: 14,
  },
  mesh_plate: {
    id: "mesh_plate",
    kind: "Armor",
    name: "Mesh Plate",
    tier: "Uncommon",
    type: "Chestplate",
    defense: 18,
  },

  // Rare
  optic_visor: {
    id: "optic_visor",
    kind: "Armor",
    name: "Optic Visor",
    tier: "Rare",
    type: "Helmet",
    defense: 20,
  },
  mag_boots: {
    id: "mag_boots",
    kind: "Armor",
    name: "Mag Boots",
    tier: "Rare",
    type: "Boots",
    defense: 18,
  },
  reactive_legs: {
    id: "reactive_legs",
    kind: "Armor",
    name: "Reactive Legs",
    tier: "Rare",
    type: "Legs",
    defense: 24,
  },
  titan_plate: {
    id: "titan_plate",
    kind: "Armor",
    name: "Titan Plate",
    tier: "Rare",
    type: "Chestplate",
    defense: 32,
  },

  // Epic
  phase_helmet: {
    id: "phase_helmet",
    kind: "Armor",
    name: "Phase Helmet",
    tier: "Epic",
    type: "Helmet",
    defense: 35,
  },
  void_plate: {
    id: "void_plate",
    kind: "Armor",
    name: "Void Plate",
    tier: "Epic",
    type: "Chestplate",
    defense: 50,
  },

  // Legendary
  singularity_helm: {
    id: "singularity_helm",
    kind: "Armor",
    name: "Singularity Helm",
    tier: "Legendary",
    type: "Helmet",
    defense: 60,
  },
  aegis_plate: {
    id: "aegis_plate",
    kind: "Armor",
    name: "Aegis Plate",
    tier: "Legendary",
    type: "Chestplate",
    defense: 80,
  },
} satisfies Record<string, ArmorItem>
