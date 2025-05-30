import { Prisma } from "@prisma/client";
import { SeasonType } from "src/types/types";

export const getDestinationQuery = function(isInFrance: boolean, travelSeason: SeasonType, travelDetails: string[] ) {
    let criterions: Prisma.DestinationWhereInput = {
        isInFrance,
    };
    
    if (travelSeason !== 'flex') {
        criterions = { ...criterions, OR: [
            {
                firstPrivilegedSeason: travelSeason,
            },
            { secondPrivilegedSeason: travelSeason, },
        ], }
    }
    if (travelDetails.includes('hasParty')) {
    criterions = { ...criterions, hasParty: true }
    }
    if (travelDetails.includes('hasAccessToSea')) {
    criterions = { ...criterions, hasAccessToSea: true }
    }
    if (travelDetails.includes('isHistoricPlace')) {
    criterions = { ...criterions, isHistoricPlace: true }
    }
    if (travelDetails.includes('hasAccessToMountain')) {
    criterions = { ...criterions, hasAccessToMountain: true }
    }
    if (travelDetails.includes('hasAccessToLake')) {
    criterions = { ...criterions, hasAccessToLake: true }
    }
    if (travelDetails.includes('isWineRegion')) {
    criterions = { ...criterions, isWineRegion: true }
    }

    return criterions;
}

export const extractCriterionsWithMatchingDestinations = (destinations: Prisma.DestinationWhereInput[]) => {
    const result = {
        summer: false,
        autumn: false,
        winter: false,
        spring: false,
        hasParty: false,
        hasAccessToSea: false,
        isHistoricPlace: false,
        hasAccessToMountain: false,
        hasAccessToLake: false,
        isWineRegion: false,
    };

    destinations.forEach(destination => {
        if (destination.firstPrivilegedSeason) {
            result[destination.firstPrivilegedSeason as string] = true;
        }
        if (destination.secondPrivilegedSeason) {
            result[destination.secondPrivilegedSeason as string] = true;
        }

        if (destination.hasParty) {
            result.hasParty = true;
        }
        if (destination.hasAccessToSea) {
            result.hasAccessToSea = true;
        }
        if (destination.isHistoricPlace) {
            result.isHistoricPlace = true;
        }
        if (destination.hasAccessToMountain) {
            result.hasAccessToMountain = true;
        }
        if (destination.hasAccessToLake) {
            result.hasAccessToLake = true;
        }
        if (destination.isWineRegion) {
            result.isWineRegion = true;
        }
    });

    return result;
};