export const yesOrNoToBoolean = (str: string) => {
    switch(str.toLowerCase()) {
        case "no":
        return false;
        
        default: return true;
    }
}

export const getDestinationQuery = function(is_in_france: boolean, season: string, travelDetails: any ) {
    let criterions: {
        is_in_france?: boolean;
        has_party?: boolean;
        has_access_to_sea?: boolean;
        is_historic_place?: boolean;
        has_access_to_mountain?: boolean;
        has_access_to_lake?: boolean;
        is_wine_region?: boolean;
        season?: string;
        OR?: any;
    } = {
        is_in_france,
    };
    
    if (season !== 'flex') {
        criterions = { ...criterions, OR: [
            {
                first_privileged_season: season,
            },
            { second_privileged_season: season, },
        ], }
    }
    if (travelDetails.includes('has_party')) {
    criterions = { ...criterions, has_party: true }
    }
    if (travelDetails.includes('has_access_to_sea')) {
    criterions = { ...criterions, has_access_to_sea: true }
    }
    if (travelDetails.includes('is_historic_place')) {
    criterions = { ...criterions, is_historic_place: true }
    }
    if (travelDetails.includes('has_access_to_mountain')) {
    criterions = { ...criterions, has_access_to_mountain: true }
    }
    if (travelDetails.includes('has_access_to_lake')) {
    criterions = { ...criterions, has_access_to_lake: true }
    }
    if (travelDetails.includes('is_wine_region')) {
    criterions = { ...criterions, is_wine_region: true }
    }

    return criterions;
}
