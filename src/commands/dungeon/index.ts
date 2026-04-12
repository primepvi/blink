import { ChatInputCommandInteraction } from "discord.js";
import { createCommand } from "../../factory/command";

export default createCommand({
	name: "dungeon",
	description: "dungeon",
	options: [],
	subCommands: ["start", "quit", "inventory"],
	execute(interaction: ChatInputCommandInteraction) { },
});
