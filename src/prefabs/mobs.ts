import { MobSector } from "../types/grid"

export type MobDefinition = Omit<MobSector, "type" | "reward" | "level">;

export const mobs = {
  // Minion
  grid_grunt: {
    mobId: "grid_grunt",
    mobName: "Grid Grunt",
    rank: "Minion",
  },
  patrol_drone: {
    mobId: "patrol_drone",
    mobName: "Patrol Drone",
    rank: "Minion",
  },
  scrap_crawler: {
    mobId: "scrap_crawler",
    mobName: "Scrap Crawler",
    rank: "Minion",
  },
  glitch_sprite: {
    mobId: "glitch_sprite",
    mobName: "Glitch Sprite",
    rank: "Minion",
  },
  void_fragment: {
    mobId: "void_fragment",
    mobName: "Void Fragment",
    rank: "Minion",
  },

  // Elite
  rogue_hacker: {
    mobId: "rogue_hacker",
    mobName: "Rogue Hacker",
    rank: "Elite",
  },
  corrupted_sentinel: {
    mobId: "corrupted_sentinel",
    mobName: "Corrupted Sentinel",
    rank: "Elite",
  },
  phase_stalker: {
    mobId: "phase_stalker",
    mobName: "Phase Stalker",
    rank: "Elite",
  },
  signal_wraith: {
    mobId: "signal_wraith",
    mobName: "Signal Wraith",
    rank: "Elite",
  },
} satisfies Record<string, MobDefinition>

export const bosses = {
  kronos_1: {
    mobId: "kronos_1",
    mobName: "KRONOS-1",
    rank: "Boss",
  },
  the_void: {
    mobId: "the_void",
    mobName: "THE VOID",
    rank: "Boss",
  },
  signal_lost: {
    mobId: "signal_lost",
    mobName: "SIGNAL LOST",
    rank: "Boss",
  },
  binary_star: {
    mobId: "binary_star",
    mobName: "BINARY STAR",
    rank: "Boss",
  },
  parasite_fleet: {
    mobId: "parasite_fleet",
    mobName: "PARASITE FLEET",
    rank: "Boss",
  },
} satisfies Record<string, MobDefinition>
