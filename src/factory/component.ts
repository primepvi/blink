import { ButtonInteraction, StringSelectMenuInteraction } from "discord.js";

export enum ComponentKind {
	Button,
	StringSelect
}

export interface ComponentInteraction {
	[ComponentKind.Button]: ButtonInteraction;
	[ComponentKind.StringSelect]: StringSelectMenuInteraction;
}

export interface ComponentOptions<T extends ComponentKind> {
	type: T;
	name: string;
	authorOnly?: boolean;
	execute: (interaction: ComponentInteraction[T]) => void | Promise<void>;
}

export function createComponent<T extends ComponentKind>(options: ComponentOptions<T>) { return options; }
