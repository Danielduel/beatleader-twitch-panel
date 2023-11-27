import {tweened} from 'svelte/motion';
import {cubicOut} from 'svelte/easing';

function BLTweened(value, duration = 500) {
	return tweened(value, {duration, easing: cubicOut});
}

const diffColors = {
	easy: 'MediumSeaGreen',
	normal: '#59b0f4',
	hard: 'tomato',
	expert: '#bf2a42',
	expertPlus: '#8f48db',
	expertplus: '#8f48db',
};

const TWEEN_DURATION = 300;

export const HMDs = {
	256: {
		name: 'Quest 2',
		icon: 'oculus.svg',
		color: 'invert(49%) sepia(26%) saturate(5619%) hue-rotate(146deg) brightness(93%) contrast(86%)',
		priority: 1,
	},
	64: {
		name: 'Valve Index',
		icon: 'index.svg',
		color: 'invert(81%) sepia(27%) saturate(6288%) hue-rotate(344deg) brightness(103%) contrast(103%)',
		priority: 2,
	},
	1: {
		name: 'Rift CV1',
		icon: 'oculus.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 3,
	},
	2: {
		name: 'Vive',
		icon: 'vive.svg',
		color: 'invert(54%) sepia(78%) saturate(2598%) hue-rotate(157deg) brightness(97%) contrast(101%)',
		priority: 4,
	},
	60: {
		name: 'Pico 4',
		icon: 'piconeo.png',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 5,
	},
	61: {
		name: 'Quest Pro',
		icon: 'meta.svg',
		color: '',
		priority: 6,
	},
	8: {
		name: 'Windows Mixed Reality',
		icon: 'wmr.svg',
		color: 'invert(34%) sepia(67%) saturate(7482%) hue-rotate(193deg) brightness(103%) contrast(101%)',
		priority: 7,
	},
	16: {
		name: 'Rift S',
		icon: 'oculus.svg',
		color: 'invert(96%) sepia(9%) saturate(5456%) hue-rotate(170deg) brightness(100%) contrast(107%)',
		priority: 8,
	},
	32: {
		name: 'Quest',
		icon: 'oculus.svg',
		color: 'invert(73%) sepia(55%) saturate(5479%) hue-rotate(271deg) brightness(106%) contrast(107%)',
		priority: 9,
	},
	4: {
		name: 'Vive Pro',
		icon: 'vive.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 10,
	},
	35: {
		name: 'Vive Pro 2',
		icon: 'vive.svg',
		color: '',
		priority: 11,
	},
	128: {
		name: 'Vive Cosmos',
		icon: 'vive.svg',
		color: 'invert(11%) sepia(100%) saturate(7426%) hue-rotate(297deg) brightness(85%) contrast(109%)',
		priority: 12,
	},
	36: {
		name: 'Vive Elite',
		icon: 'vive.svg',
		color: 'invert(25%) sepia(89%) saturate(5057%) hue-rotate(278deg) brightness(108%) contrast(85%)',
		priority: 13,
	},
	47: {
		name: 'Vive Focus',
		icon: 'vive.svg',
		color: 'invert(48%) sepia(91%) saturate(4410%) hue-rotate(340deg) brightness(94%) contrast(97%)',
		priority: 14,
	},
	38: {
		name: 'Pimax 8K',
		icon: 'pimax.png',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 15,
	},
	39: {
		name: 'Pimax 5K',
		icon: 'pimax.png',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 16,
	},
	40: {
		name: 'Pimax Artisan',
		icon: 'pimax.png',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 17,
	},
	33: {
		name: 'Pico Neo 3',
		icon: 'piconeo.png',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 18,
	},
	34: {
		name: 'Pico Neo 2',
		icon: 'piconeo.png',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 19,
	},
	41: {
		name: 'HP Reverb',
		icon: 'hp.png',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 20,
	},
	42: {
		name: 'Samsung WMR',
		icon: 'samsung.png',
		color: '',
		priority: 21,
	},
	43: {
		name: 'Qiyu Dream',
		icon: 'iqiyi.png',
		color: '',
		priority: 22,
	},
	45: {
		name: 'Lenovo Explorer',
		icon: 'lenovo.png',
		color: '',
		priority: 23,
	},
	46: {
		name: 'Acer WMR',
		icon: 'acer.svg',
		color: '',
		priority: 24,
	},
	48: {
		name: 'Arpara',
		icon: 'arpara.png',
		color: '',
		priority: 25,
	},
	49: {
		name: 'Dell Visor',
		icon: 'dell.svg',
		color: '',
		priority: 26,
	},
	55: {
		name: 'Huawei VR',
		icon: 'huawei.png',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 27,
	},
	56: {
		name: 'Asus WMR',
		icon: 'asus.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 28,
	},
	51: {
		name: 'Vive DVT',
		icon: 'vive.svg',
		color: 'invert(69%) sepia(52%) saturate(501%) hue-rotate(107deg) brightness(98%) contrast(86%)',
		priority: 29,
	},
	52: {
		name: 'glasses20',
		icon: 'unknown.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 30,
	},
	53: {
		name: 'hedy',
		icon: 'unknown.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 31,
	},
	54: {
		name: 'Vaporeon',
		icon: 'unknown.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 32,
	},
	57: {
		name: 'Cloud XR',
		icon: 'unknown.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 33,
	},
	58: {
		name: 'VRidge',
		icon: 'unknown.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 34,
	},
	50: {
		name: 'e3',
		icon: 'unknown.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 35,
	},
	59: {
		name: 'Medion Eraser',
		icon: 'unknown.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 36,
	},

	37: {
		name: 'Miramar',
		icon: 'unknown.svg',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 37,
	},
	0: {
		name: 'Unknown headset',
		icon: 'unknown.svg',
		color: 'invert(70%) sepia(65%) saturate(4492%) hue-rotate(354deg) brightness(96%) contrast(91%)',
		priority: 38,
	},
	44: {
		name: 'Disco',
		icon: 'disco.png',
		color: 'invert(99%) sepia(3%) saturate(82%) hue-rotate(58deg) brightness(118%) contrast(100%)',
		priority: 39,
	},
};

export function getHeadsetForHMD(hmd) {
	return HMDs?.[hmd] ?? null;
}

const scoresStatsTweened = {};
function updateScoresStats(playerData) {
	if (!playerData) return null;

	const scoreStats = playerData?.scoreStats;
	const statsHistory = playerData?.statsHistory;

	const statsDef = scoreStats
		? [
				{key: 'dailyImprovements', label: 'Improved scores', bgColor: 'darkgreen'},
				{key: 'totalPlayCount', label: 'Total play count', bgColor: 'var(--selected)'},
				{key: 'totalScore', label: 'Total score', bgColor: 'var(--selected)'},
				{key: 'rankedPlayCount', label: 'Ranked play count', bgColor: 'var(--ppColour)'},
				{key: 'totalRankedScore', label: 'Total ranked score', bgColor: 'var(--ppColour)'},
				{key: 'topPp', label: 'Top PP', bgColor: 'var(--ppColour)', digits: 2, suffix: 'pp'},
				{key: 'replaysWatched', label: 'Replays watched', bgColor: 'var(--ppColour)'},
				{key: 'topAccuracy', label: 'Best acc', title: 'Best accuracy', digits: 2, suffix: '%', bgColor: 'rgba(60,179,113,.75)'},
				{key: 'averageAccuracy', label: 'Average acc', title: 'Average accuracy', digits: 2, suffix: '%', bgColor: 'var(--selected)'},
				{key: 'medianAccuracy', label: 'Median acc', title: 'Median accuracy', digits: 2, suffix: '%', bgColor: 'var(--selected)'},
				{
					key: 'averageRankedAccuracy',
					label: 'Average ranked acc',
					title: 'Average ranked accuracy',
					digits: 2,
					suffix: '%',
					bgColor: 'var(--selected)',
				},
				{
					key: 'averageWeightedRankedAccuracy',
					label: 'Weighted ranked acc',
					title: 'Average ranked accuracy (weighted)',
					digits: 2,
					suffix: '%',
					bgColor: 'var(--ppColour)',
				},
				{
					key: 'medianRankedAccuracy',
					label: 'Median ranked acc',
					title: 'Median ranked accuracy',
					digits: 2,
					suffix: '%',
					bgColor: 'var(--ppColour)',
				},
				{
					key: 'averageWeightedRankedRank',
					label: 'Weighted Average rank',
					title: 'Weighted Average rank',
					digits: 2,
					prefix: '#',
					bgColor: 'var(--selected)',
				},
				{key: 'averageRank', label: 'Average rank', title: 'Average rank', digits: 2, prefix: '#', bgColor: 'var(--selected)'},
				{key: 'topPlatform', label: 'Platform', title: 'Last 50 scores top platform', bgColor: 'var(--selected)'},
				{key: 'topHMD', label: 'Headset', title: 'Last 50 scores top headset', bgColor: 'var(--selected)'},
		  ]
		: [];

	return statsDef
		.map(s => {
			const value = scoreStats && scoreStats[s.key] ? scoreStats[s.key] : null;
			if (!value && !Number.isFinite(value)) return null;

			let resultValue = value;
			let type = 'string';
			if (s.key == 'topHMD') {
				resultValue = getHeadsetForHMD(value).name;
			} else if (Number.isFinite(value)) {
				if (!scoresStatsTweened.hasOwnProperty(s.key)) scoresStatsTweened[s.key] = BLTweened(value, TWEEN_DURATION);
				else scoresStatsTweened[s.key].set(value);

				resultValue = scoresStatsTweened[s.key];
				type = 'number';
			}

			return {
				label: s.label,
				title: s?.title ?? '',
				value: resultValue,
				prevValue: s.suffix === '%' && statsHistory?.[s.key]?.length > 1 ? statsHistory[s.key][statsHistory[s.key].length - 2] : null,
				prevLabel: 'Yesterday',
				digits: s?.digits ?? 0,
				prefix: s?.prefix ?? '',
				suffix: s?.suffix ?? '',
				fluid: true,
				bgColor: s?.bgColor ?? 'var(--dimmed)',
				key: s.key,
				inline: true,
				type,
			};
		})
		.filter(s => s);
}

function updateAccBadges(playerData) {
	if (!playerData?.scoreStats) return null;

	return [
		{label: 'SS+', min: 95, max: null, value: 0, bgColor: diffColors.expertPlus, key: 'sspPlays'},
		{label: 'SS', min: 90, max: 95, value: 0, bgColor: diffColors.expert, key: 'ssPlays'},
		{label: 'S+', min: 85, max: 90, value: 0, bgColor: diffColors.hard, key: 'spPlays'},
		{label: 'S', min: 80, max: 85, value: 0, bgColor: diffColors.normal, key: 'sPlays'},
		{label: 'A', min: null, max: 80, value: 0, bgColor: diffColors.easy, key: 'aPlays'},
	].map(badge => {
		const value = playerData?.scoreStats?.[badge.key] ?? 0;

		if (!scoresStatsTweened.hasOwnProperty(badge.label)) scoresStatsTweened[badge.label] = BLTweened(value, TWEEN_DURATION);
		else scoresStatsTweened[badge.label].set(value);

		return {
			...badge,
			value: scoresStatsTweened[badge.label],
			title: (!badge.min ? `< ${badge.max}%` : !badge.max ? `> ${badge.min}%` : `${badge.min}% - ${badge.max}%`) + ' (On ranked maps)',
			fluid: true,
			digits: 0,
		};
	});
}

function updateSsBadges(playerData) {
	if (!playerData?.badges?.length) return null;

	return playerData.badges.map(b => ({src: `${b.image}`, title: b.description, link: b.link}));
}

const playerInfoTweened = {};
export default playerData => {
	if (!playerData) return {};

	const playerInfo = {...(playerData?.playerInfo ?? null)};

	['pp', 'rank'].forEach(key => {
		const value = playerInfo && playerInfo[key] ? playerInfo[key] : 0;
		if (!playerInfoTweened.hasOwnProperty(key)) playerInfoTweened[key] = BLTweened(value, TWEEN_DURATION);
		else playerInfoTweened[key].set(value);

		if (playerInfo) {
			playerInfo[key + 'Value'] = playerInfo[key];
			playerInfo[key] = playerInfoTweened[key];
		}
	});

	const firstCountryRank = playerInfo?.countries?.[0]?.rank;
	if (Number.isFinite(firstCountryRank)) {
		playerInfo.countries = playerInfo.countries.map(c => ({...c}));
		const key = 'countryRank';
		const value = playerInfo.countries[0].rank;

		if (!playerInfoTweened.hasOwnProperty(key)) playerInfoTweened[key] = BLTweened(value, TWEEN_DURATION);
		else playerInfoTweened[key].set(value);

		playerInfo.countries[0].rankValue = value;
		playerInfo.countries[0].rank = playerInfoTweened[key];
	}

	return {
		playerInfo,
		prevInfo: playerData?.prevInfo ?? null,
		scoresStats: updateScoresStats(playerData),
		accBadges: updateAccBadges(playerData),
		ssBadges: updateSsBadges(playerData),
	};
};
