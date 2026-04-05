import { ChatInputCommandInteraction } from "discord.js";
import { createCommand } from "../factory/command";
import { bot } from "../bot";
import { emojis } from "../utils/emojis";
import { k } from "kompozr";
import { db } from "../schemas";

export default createCommand({
	name: "ping",
	description: "Utilize esse comando para ver minha latência.",
	options: [],
	async execute(interaction: ChatInputCommandInteraction) {
		let beforeTimestamp = Date.now();
		await interaction.deferReply();
		const apiLatency = Date.now() - beforeTimestamp;

		beforeTimestamp = Date.now();
		await db.users.findById(interaction.user.id);
		const dbLatency = Date.now() - beforeTimestamp;

		interaction.editReply({
			components: k.layout([
				k.text(
					`${emojis.icon_pong} **| Pong!** ${interaction.user}, veja **logo abaixo** minha **latência**:`,
					`> ${emojis.icon_info} ** | Gateway**: \`${bot.ws.ping}ms\``,
				  `> ${emojis.icon_info} ** | API**: \`${apiLatency}ms\``,
				  `> ${emojis.icon_info} ** | Database**: \`${dbLatency}ms\``,
				),
				k.separator.small,
			  `-# Online desde <t:${Math.floor((bot.readyTimestamp || Date.now()) / 1000)}:F>`,
			]),
			flags: ["IsComponentsV2"]
		});
	}
});
