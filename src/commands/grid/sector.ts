import { ChatInputCommandInteraction } from "discord.js";
import { createSubCommand } from "../../factory/command";
import { db } from "../../schemas";
import { Grid } from "../../structs/grid";
import { k } from "kompozr";
import { createShopComponent } from "../../ui/shop";
import { createMobComponent } from "../../ui/mob";
import { MobSector, ShopSector } from "../../types/grid";

export default createSubCommand({
	parent: "grid",
	name: "sector",
	description: "Utilize esse comando para interagir com o setor atual do grid.",
	options: [],
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		const userData = (await db.users.findById(interaction.user.id))!;
		if (!userData.match) {
			interaction.editReply("Você não tem uma partida em andamento.");
			return;
		}

		const matchData = (await db.matches.findById(userData.match))!;

		const grid = new Grid(matchData.seed);
		const phase = grid.getSectorByIndex(matchData.sector);
		const container = phase.sector.type === "Shop" ? createShopComponent(phase.index, phase.sector as ShopSector) : createMobComponent(phase.index, phase.sector as MobSector);

		interaction.editReply({ components: [k.text(`Sector: ${matchData.sector}`), container], flags: ["IsComponentsV2"] });
	},
});
