import { logger } from "@kauzx/logger";
import { ApplicationCommandOptionType, ApplicationCommandType, Client, Collection, GatewayIntentBits } from "discord.js";
import { privateDecrypt } from "node:crypto";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { CommandOptions, SubCommandOptions } from "../factory/command";
import mongoose from "mongoose";

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
	commandsGuildID: "1033506011119636492"
};

const DEFAULT_DATABASE_URL = process.env.DATABASE_URL!;

export class Bot extends Client {
	public commands = new Collection<string, CommandOptions>();
	public subCommands = new Collection<string, SubCommandOptions>();
	public commandsGuildId: string;

	public constructor({ token, intents, commandsGuildID }: BotConfig = DEFAULT_CONFIG) {
		super({ intents });

		this.token = token;
		this.commandsGuildId = commandsGuildID;
	}

	public async init() {
		await this.loadCommands();
		await super.login(this.token!);
		await this.loadEvents();
		await this.connectToDatabase();
	}

	private async connectToDatabase(url = DEFAULT_DATABASE_URL) {
		try {
			await mongoose.connect(url);
			logger.success("O banco de dados foi conectado com sucesso.");
		} catch (error) {
			logger.error(
				`Erro ao se conectar com o banco de dados: \n${error}`,
			);
		}
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

	private async loadCommands() {
		const files = this.loadFiles("src/commands/");

		for (const file of files) {
		  const { default: command } = await import(file);

			if (command.parent) {
				const fullName = command.parent + "_" + command.name;
			  this.subCommands.set(fullName, command);
			  	logger.success(`O subcomando ${fullName} foi carregado com sucesso.`);
			} else {
				this.commands.set(command.name, command);
				logger.success(`O comando ${command.name} foi carregado com sucesso.`);
			}


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
