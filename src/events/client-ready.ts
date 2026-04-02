import { Client } from "discord.js";
import { createEvent } from "../factory/event";
import { logger } from "@kauzx/logger";

export default createEvent({
	name: "clientReady",
	once: true,
	execute(client: Client<true>) {
	  logger.info(`O bot foi conectado com sucesso em ${client.user.displayName},`);
	}
});
