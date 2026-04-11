import { ChatInputCommandInteraction } from "discord.js";
import { createCommand } from "../factory/command";
import { db } from "../schemas";
import { emojis } from "../utils/emojis";

export default createCommand({
	name: "credits",
	description: "Utilize esse comando para ver seus créditos.",
	options: [],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();
		const userData = (await db.users.findById(interaction.user.id))!;

		interaction.editReply(`> ${emojis.icon_credits} **|** ${interaction.user}, você **possui** \`${userData.credits}\` **créditos**. `);
	},
});
