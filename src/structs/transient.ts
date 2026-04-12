export class Transient {
	private data = new Map();

	public get<T>(key: string) {
		return this.data.get(key) as T | undefined;
	}

	public has(key: string) { return this.data.has(key); }
	public set<T>(key: string, value: T) {
		this.data.set(key, value);
	}
}
