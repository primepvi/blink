import { Mob, MobDrop } from "../types/mobs";

const mob = (data: Mob) => (data);

export const mobs = {
	aranha_cogumelo: mob({
		id: "aranha_cogumelo",
		name: "Aranha Cogumelo",
		iconURL: "https://cdn.discordapp.com/attachments/1347628969079341097/1493310818849263765/Icon1.png?ex=69de8193&is=69dd3013&hm=6caaa90c79082604d80cb00c3c28f79a4d6ef6f7c2a81645b038648f0c4053de&",
		maxHealth: 50,
		maxShield: 0,
		drops: [{
			itemId: "cogumelo_vermelho",
			quantity: {
				min: 1,
				max: 1
			},
			chance: 25
		}],
		reward: {
			min: 25,
			max: 50
		}
	}),
	escorpiao_cogumelo: mob({
		id: "escorpiao_cogumelo",
		name: "Escorpião Cogumelo",
		iconURL: "https://cdn.discordapp.com/attachments/1347628969079341097/1493311012172992654/Icon9.png?ex=69de81c1&is=69dd3041&hm=68549f95b734a1ed6727124eae43a60872d41ba998f69663183ce64bb7d49a1c&",
		maxHealth: 100,
		maxShield: 0,
		drops: [
			{
				itemId: "cogumelo_vermelho",
				quantity: {
					min: 1,
					max: 1
				},
				chance: 50
			},
			{
				itemId: "cogumelo_verde",
				quantity: {
					min: 1,
					max: 1
				},
				chance: 25
			}
		],
		reward: {
			min: 35,
			max: 65
		}
	}),
	cogumelo_tristonho: mob({
		id: "cogumelo_tristonho",
		name: "Cogumelo Tristonho",
		iconURL: "https://cdn.discordapp.com/attachments/1347628969079341097/1493330051536781563/Icon6.png?ex=69de937d&is=69dd41fd&hm=ae28ef7795d281afab08c1b18837ba4793221fc3f87e3c133c0f136aaabfc6ad&",
		maxHealth: 200,
		maxShield: 0,
		drops: [
			{
				itemId: "cogumelo_vermelho",
				quantity: {
					min: 1,
					max: 1
				},
				chance: 50
			},
			{
				itemId: "cogumelo_verde",
				quantity: {
					min: 1,
					max: 1
				},
				chance: 25
			},
			{
				itemId: "olho_abismo",
				quantity: {
					min: 1,
					max: 1
				},
				chance: 15
			}
		],
		reward: {
			min: 50,
			max: 100
		}
	})
} as const;
