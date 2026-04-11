import { ChatInputCommandInteraction } from "discord.js";
import { createCommand } from "../../factory/command";

export default createCommand({
	name: "kit",
	description: "kit",
	options: [],
	subCommands: ["shop", "buy", "inventory"],
	execute: function(interaction: ChatInputCommandInteraction) { }
});
