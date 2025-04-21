export type TravelCriterionType = {
    isInFrance: boolean | undefined;
    hasAccessToMountain: boolean | undefined;
    hasAccessToSea: boolean | undefined;
    hasAccessToLake: boolean | undefined;
    hasParty: boolean | undefined;
    isHistoricPlace: boolean | undefined;
    isWineRegion: boolean | undefined;
    season: SeasonType | undefined;
}

export type SeasonType = "spring" | "summer" | "autumn" | "winter" | "flex"

export type CriterionsWithMatchingDestinationsType = {
    summer: boolean;
    autumn: boolean;
    winter: boolean;
    spring: boolean;
    hasParty: boolean;
    hasAccessToSea: boolean;
    isHistoricPlace: boolean;
    hasAccessToMountain: boolean;
    hasAccessToLake: boolean;
    isWineRegion: boolean;
}