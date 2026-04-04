import { ChatInputCommandInteraction } from "discord.js";
import { createCommand } from "../../factory/command";

export default createCommand({
	name: "grid",
	description: "grid",
	subCommands: ["sector", "advance"],
	options: [],
	execute(interaction: ChatInputCommandInteraction) { },
});
