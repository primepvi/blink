import { ApplicationCommandOptionChoiceData, ApplicationCommandOptionType, ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { kits } from "../../constants/kits";
import { db } from "../../schemas";
import { emojis } from "../../utils/emojis";

export default createSubCommand({
	parent: "kit",
	name: "buy",
	description: "Utilize esse comando para comprar um kit de equipamento.",
	options: [{
		type: ApplicationCommandOptionType.String,
		name: "name",
		description: "Insira o nome do kit de equipamento que deseja comprar.",
		choices: Object.values(kits).map(kit => ({
			name: kit.name,
			value: kit.name.toLowerCase()
		} satisfies ApplicationCommandOptionChoiceData)),
		required: true
	}],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		const userData = (await db.users.findById(interaction.user.id))!;
		const kitName = interaction.options.getString("name", true);
		const kitPrice = kits[kitName].price;

		if (userData.kits.includes(kitName)) {
			interaction.editReply(`> ${emojis.icon_error} **| Erro!** ${interaction.user}, você **já possui** este **kit de equipamento**.`);
			return;
		}

		if (userData.credits < kitPrice) {
			interaction.editReply(`> ${emojis.icon_error} **| Erro!** ${interaction.user}, você **não possui** a **quantidade** de **créditos** necessária para **comprar** este **kit de equipamento**.`);
			return;
		}


		userData.kits.push(kitName);
		userData.credits -= kitPrice;
		await userData.save();

		interaction.editReply(`> ${emojis.icon_ok} **| Sucesso!** ${interaction.user}, você **comprou** o **kit ${kitName}** por \`${kitPrice}\` **créditos**.`);
	},
});
