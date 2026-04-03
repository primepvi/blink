import { ChatInputCommandInteraction } from "discord.js";
import { createCommand } from "../../factory/command";

export default createCommand({
	name: "dungeon",
	description: "dungeon",
        subCommands: ["floor"],
	options: [],
	execute(interaction: ChatInputCommandInteraction) { },
});
