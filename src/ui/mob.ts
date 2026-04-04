import { k } from "kompozr";
import { MobSector } from "../types/grid";

export function createMobComponent(index: number, sector: MobSector) {
  const container = k.container({
    color: "Green",
    components: [k.text(
      `## Batalha Mob - ${sector.rank} ${sector.mobName}`,
      `- Level: ${sector.level}`,
      `- Recompensa: **${sector.reward.coins} Moedas**`
    )]
  });

  return container;
}
