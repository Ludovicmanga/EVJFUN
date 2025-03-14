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
