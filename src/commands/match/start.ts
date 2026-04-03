import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";

export default createSubCommand({
    parent: "match",
    name: "start",
    description: "Utilize este comando para iniciar uma partida.",
    options: [],
    execute(interaction: ChatInputCommandInteraction) {
      interaction.reply("foi");
    },
});
