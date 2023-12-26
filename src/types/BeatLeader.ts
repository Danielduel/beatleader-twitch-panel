type ProfileSettings = {
	id: number;
	bio: string | null;
	message: string | null;
	effectName: string;
	profileAppearance: string;
	hue: number;
	saturation: number;
	leftSaberColor: string | null;
	rightSaberColor: string | null;
	profileCover: string | null;
	starredFriends: string;
	showBots: boolean;
	showAllRatings: boolean;
};

type SocialsItem = {
	id: number;
	service: string;
	link: string;
	user: string;
	userId: string;
	playerId: string;
};

type ScoreStats = {
	id: number;
	totalScore: number;
	totalUnrankedScore: number;
	totalRankedScore: number;
	lastScoreTime: number;
	lastUnrankedScoreTime: number;
	lastRankedScoreTime: number;
	averageRankedAccuracy: number;
	averageWeightedRankedAccuracy: number;
	averageUnrankedAccuracy: number;
	averageAccuracy: number;
	medianRankedAccuracy: number;
	medianAccuracy: number;
	topRankedAccuracy: number;
	topUnrankedAccuracy: number;
	topAccuracy: number;
	topPp: number;
	topBonusPP: number;
	topPassPP: number;
	topAccPP: number;
	topTechPP: number;
	peakRank: number;
	rankedMaxStreak: number;
	unrankedMaxStreak: number;
	maxStreak: number;
	averageLeftTiming: number;
	averageRightTiming: number;
	rankedPlayCount: number;
	unrankedPlayCount: number;
	totalPlayCount: number;
	rankedImprovementsCount: number;
	unrankedImprovementsCount: number;
	totalImprovementsCount: number;
	rankedTop1Count: number;
	unrankedTop1Count: number;
	top1Count: number;
	rankedTop1Score: number;
	unrankedTop1Score: number;
	top1Score: number;
	averageRankedRank: number;
	averageWeightedRankedRank: number;
	averageUnrankedRank: number;
	averageRank: number;
	sspPlays: number;
	ssPlays: number;
	spPlays: number;
	sPlays: number;
	aPlays: number;
	topPlatform: string;
	topHMD: number;
	dailyImprovements: number;
	authorizedReplayWatched: number;
	anonimusReplayWatched: number;
	watchedReplays: number;
};

type ChangesItem = {
	id: number;
	timestamp: number;
	playerId: string;
	oldName: string;
	newName: string;
	oldCountry: string;
	newCountry: string | null;
	changer: string | null;
};

type ClansItem = {
	id: number;
	tag: string;
	color: string;
};

export type PlayerProfile = {
  mapperId: number;
  banned: boolean;
  inactive: boolean;
  banDescription: string | null;
  externalProfileUrl: string;
  history: null; // You might want to specify a more detailed type if history has a structure
  badges: any[]; // Replace 'any' with a more specific type if you know the structure of badges
  pinnedScores: null; // Same as above, specify detailed type if structure is known
  changes: ChangesItem[];
  accPp: number;
  passPp: number;
  techPp: number;
  scoreStats: ScoreStats;
  lastWeekPp: number;
  lastWeekRank: number;
  lastWeekCountryRank: number;
  eventsParticipating: null; // Define a type if structure is known
  id: string;
  name: string;
  platform: string;
  avatar: string;
  country: string;
  bot: boolean;
  pp: number;
  rank: number;
  countryRank: number;
  role: string;
  socials: SocialsItem[];
  contextExtensions: null; // Define a type if structure is known
  patreonFeatures: null; // Define a type if structure is known
  profileSettings: ProfileSettings;
  clans: ClansItem[];
}
