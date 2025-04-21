import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { yesOrNoToBoolean } from 'src/utils';
import * as xlsx from 'xlsx';
import { DestinationDto } from './dto/destination.dto';
import { Destination, Prisma } from '@prisma/client';

@Injectable()
export class DestinationService {
    constructor(private prisma: PrismaService) {}

    async importDestinationsList(workbook: xlsx.WorkBook) {
        const destinationSheetName = "Destinations";
        const destinationsSheet = workbook.Sheets[destinationSheetName];

        if (!workbook.SheetNames.includes(destinationSheetName)) {
          throw new Error(`Sheet "${destinationSheetName}" not found in the uploaded Excel file.`);
        }
  
        const parsedDestinationsSheet = xlsx.utils.sheet_to_json(destinationsSheet);

        const destinationsList: {
            name                     : string;
            isInFrance                : boolean;
            hasAccessToMountain       : boolean;
            hasAccessToSea            : boolean;
            hasAccessToLake           : boolean;
            hasParty                    : boolean;
            isHistoricPlace                 : boolean;
            isWineRegion                     : boolean;
            firstPrivilegedSeason  : string;
            secondPrivilegedSeason : string;
        }[] = [];
  
        for (const destinationRow of parsedDestinationsSheet) {
          if (destinationRow['Villes']
            && destinationRow['France ?']
            && destinationRow['Accès à la mer ?'] 
            && destinationRow["Accès à la montagne ?"]
            && destinationRow["Accès à un lac ?"]
            && destinationRow["Teuf ?"]
            && destinationRow["Ville historique ?"] 
            && destinationRow["Région viticole ?"]
            && destinationRow["Saison privilégiée 1"] 
            && destinationRow["Saison privilégiée 2"]
          ) {            			
              destinationsList.push({
              name: destinationRow['Villes'],
              isInFrance: yesOrNoToBoolean(destinationRow['France ?']),
              hasAccessToSea: yesOrNoToBoolean(destinationRow['Accès à la mer ?']), 
              hasAccessToMountain: yesOrNoToBoolean(destinationRow["Accès à la montagne ?"]),
              hasAccessToLake: yesOrNoToBoolean(destinationRow["Accès à un lac ?"]),
              hasParty                    : yesOrNoToBoolean(destinationRow["Teuf ?"]),
              isHistoricPlace                 : yesOrNoToBoolean(destinationRow["Ville historique ?"]),
              isWineRegion                     : yesOrNoToBoolean(destinationRow["Région viticole ?"]),
              firstPrivilegedSeason  : destinationRow["Saison privilégiée 1"],
              secondPrivilegedSeason : destinationRow["Saison privilégiée 2"]
            });  
          }
        }
        
         const createdDestinatations = await this.prisma.destination.createManyAndReturn({
          data: destinationsList
        });

        return createdDestinatations
    }

    async getDestinationFromCriterion(destinationQuery: Prisma.DestinationWhereInput) {
      return await this.prisma.destination.findFirst({
        where: destinationQuery
      })
    }

    async getExistingDestinationsWithGivenCriterion(isInFrance: boolean, travelSeason: string, travelDetails: string[]) {
      let destinations: Destination[];
  
      const travelDetailsConditions = travelDetails.map(detail => ({
          [detail]: true,
      }));
  
      if (travelSeason === "flex") {
          if (travelDetails.length > 0) {
              destinations = await this.prisma.destination.findMany({
                  where: {
                      isInFrance,
                      AND: travelDetailsConditions,
                  },
              });
          } else {
              destinations = await this.prisma.destination.findMany({
                  where: {
                      isInFrance,
                  },
              });
          }
      } else {
          if (travelDetails.length > 0 && travelSeason) {
              destinations = await this.prisma.destination.findMany({
                  where: {
                      isInFrance,
                      OR: [
                          { firstPrivilegedSeason: travelSeason },
                          { secondPrivilegedSeason: travelSeason },
                      ],
                      AND: travelDetailsConditions,
                  },
              });
          } else if (travelSeason) {
              destinations = await this.prisma.destination.findMany({
                  where: {
                      isInFrance,
                      OR: [
                          { firstPrivilegedSeason: travelSeason },
                          { secondPrivilegedSeason: travelSeason },
                      ],
                  },
              });
          } else {
              destinations = await this.prisma.destination.findMany({
                  where: {
                      isInFrance,
                  },
              });
          }
      }
  
      return destinations;
  }
}
