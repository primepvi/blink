import { AccessoryItem, ArmorItem, WeaponItem } from "../types/items"

export const accessories = {
  // Common
  melee_focus: {
    id: "melee_focus",
    kind: "Accessory",
    name: "Melee Focus",
    tier: "Common",
    auras: [
      {
        directions: ["top"],
        effect: {
          target: "damage",
          mode: "percent",
          value: 15,
          condition: (item) => item.kind === "Weapon" && (item as WeaponItem).type === "Melee"
        },
      },
    ],
  },
  magic_lens: {
    id: "magic_lens",
    kind: "Accessory",
    name: "Magic Lens",
    tier: "Common",
    auras: [
      {
        directions: ["top"],
        effect: {
          target: "damage",
          mode: "percent",
          value: 15,
          condition: (item) => item.kind === "Weapon" && (item as WeaponItem).type === "Magic"
        },
      },
    ],
  },
  shield_chip: {
    id: "shield_chip",
    kind: "Accessory",
    name: "Shield Chip",
    tier: "Common",
    auras: [
      {
        directions: ["top"],
        effect: {
          target: "defense",
          mode: "flat",
          value: 8,
          condition: (item) => item.kind === "Armor" && (item as ArmorItem).type === "Chestplate",
        },
      },
    ],
  },

  // Uncommon
  armor_linker: {
    id: "armor_linker",
    kind: "Accessory",
    name: "Armor Linker",
    tier: "Uncommon",
    auras: [
      {
        directions: ["top", "bottom"],
        effect: {
          target: "defense",
          mode: "flat",
          value: 10,
          condition: (_) => true,
        },
      },
    ],
  },
  combat_relay: {
    id: "combat_relay",
    kind: "Accessory",
    name: "Combat Relay",
    tier: "Uncommon",
    auras: [
      {
        directions: ["left", "right"],
        effect: {
          target: "damage",
          mode: "flat",
          value: 8,
          condition: (item) => item.kind === "Weapon" && (item as WeaponItem).type === "Melee"
        },
      },
    ],
  },
  stim_patch: {
    id: "stim_patch",
    kind: "Accessory",
    name: "Stim Patch",
    tier: "Uncommon",
    auras: [
      {
        directions: ["top", "bottom"],
        effect: {
          target: "value",
          mode: "percent",
          value: 20,
          condition: (item) => item.kind === "Consumable"
        },
      },
    ],
  },

  // Rare
  void_crystal: {
    id: "void_crystal",
    kind: "Accessory",
    name: "Void Crystal",
    tier: "Rare",
    auras: [
      {
        directions: ["top", "left", "right"],
        effect: {
          target: "damage",
          mode: "percent",
          value: 25,
          condition: (item) => item.kind === "Weapon" && (item as WeaponItem).type === "Magic"
        },
      },
    ],
  },
  phase_anchor: {
    id: "phase_anchor",
    kind: "Accessory",
    name: "Phase Anchor",
    tier: "Rare",
    auras: [
      {
        directions: ["top", "bottom", "left", "right"],
        effect: {
          target: "defense",
          mode: "percent",
          value: 20,
          condition: (item) => item.kind === "Armor" && (item as ArmorItem).type === "Helmet"
        },
      },
    ],
  },

  // Epic 
  quantum_core: {
    id: "quantum_core",
    kind: "Accessory",
    name: "Quantum Core",
    tier: "Epic",
    auras: [
      {
        directions: ["top", "bottom", "left", "right"],
        effect: {
          target: "damage",
          mode: "percent",
          value: 20,
          condition: (item) => item.kind === "Weapon" && (item as WeaponItem).type === "Melee"
        },
      },
      {
        directions: ["top-left", "top-right", "bottom-left", "bottom-right"],
        effect: {
          target: "defense",
          mode: "percent",
          value: 15,
          condition: (item) => item.kind === "Armor" && (item as ArmorItem).type === "Chestplate",
        },
      },
    ],
  },
  neural_web: {
    id: "neural_web",
    kind: "Accessory",
    name: "Neural Web",
    tier: "Epic",
    auras: [
      {
        directions: ["top", "bottom", "left", "right"],
        effect: {
          target: "damage",
          mode: "percent",
          value: 25,
          condition: (item) => item.kind === "Weapon" && (item as WeaponItem).type === "Magic",
        },
      },
      {
        directions: ["top-left", "top-right", "bottom-left", "bottom-right"],
        effect: {
          target: "duration",
          mode: "flat",
          value: 1,
          condition: (item) => item.kind === "Consumable"
        },
      },
    ],
  },

  // Legendary
  singularity_core: {
    id: "singularity_core",
    kind: "Accessory",
    name: "Singularity Core",
    tier: "Legendary",
    auras: [
      {
        directions: ["top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right"],
        effect: {
          target: "damage",
          mode: "percent",
          value: 30,
          condition: (item) => item.kind === "Weapon",
        },
      },
    ],
  },
} satisfies Record<string, AccessoryItem>
