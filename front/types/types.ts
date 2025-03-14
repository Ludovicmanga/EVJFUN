export type TravelCriterionType = {
    is_in_france: boolean | undefined;
    has_access_to_mountain: boolean | undefined;
    has_access_to_sea: boolean | undefined;
    has_access_to_lake: boolean | undefined;
    has_party: boolean | undefined;
    is_historic_place: boolean | undefined;
    is_wine_region: boolean | undefined;
    season: "spring" | "summer" | "autumn" | "winter" | "flex" | undefined;
}