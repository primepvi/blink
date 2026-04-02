import { logger } from "@kauzx/logger";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

export interface BotConfig {
	token: string;
	intents: GatewayIntentBits[];
	commandsGuildID: string;
}

const DEFAULT_INTENTS = [
	GatewayIntentBits.GuildMembers,
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildVoiceStates,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildPresences,
];

const DEFAULT_CONFIG: BotConfig = {
	token: process.env.BOT_TOKEN!,
	intents: DEFAULT_INTENTS,
	commandsGuildID: "1325520892536684665"
};

export class Bot extends Client {
	public commands = new Collection();
	public components = new Collection();

	public commandsGuildId: string;

	public constructor({ token, intents, commandsGuildID }: BotConfig = DEFAULT_CONFIG) {
		super({ intents });

		this.token = token;
		this.commandsGuildId = commandsGuildID;
	}

	public async init() {
		await this.loadEvents();
		await super.login(this.token!);
	}

	private async loadEvents() {
		const files = this.loadFiles("src/events/");

		for (const file of files) {
			const { default: event } = await import(file);
			const registerMethod = event.once ? "once" : "on";
			super[registerMethod](event.name, event.execute);

			logger.success(`O evento ${event.name} foi carregado com sucesso.`);
		}
	}

	private loadFiles(path: string, recursive = true): string[] {
		const files = readdirSync(path, { withFileTypes: true, recursive })
			.filter((dirent) => dirent.isFile() && (dirent.name.endsWith(".js") || dirent.name.endsWith(".ts")))
			.map((dirent) => {
				const filePath = join(dirent.parentPath, dirent.name);
				return pathToFileURL(filePath).toString();
			});

		return files;
	}
}
