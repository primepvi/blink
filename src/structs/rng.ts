import { hashSeed, mulberry32 } from "../utils/seed";

export class RNG {
  public seed: number;
  private randomFunction: () => number;
  
  public constructor(public rawSeed: string) {
    this.seed = hashSeed(rawSeed);
    this.randomFunction = mulberry32(this.seed);
  }

  public next() { return this.randomFunction(); }
  public int(min: number, max: number) { return Math.floor(this.next() * (max - min + 1)) + min; }
  public float(min: number, max: number) { return this.next() * (max - min) + min; }
  public chance(percent: number) { return this.next() < percent / 100; }

  public pick<T>(array: T[]): T {
    return array[this.int(0, array.length - 1)];
  }

  public shuffle<T>(array: T[]): T[] {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--) {
      const j = this.int(0, i);
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }

    return clone;
  }

  public sample<T>(array: T[], count: number): T[] {
    return this.shuffle<T>(array).slice(0, count);
  }
}
