import { ApplicationCommandOptionType, ChatInputCommandInteraction } from "discord.js";
import { createCommand } from "../../factory/command";

export default createCommand({
    name: "match",
    description: "match",
    subCommands: ["start"],
    options: [],
    execute(interaction: ChatInputCommandInteraction) {},
});
