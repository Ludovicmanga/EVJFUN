import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { yesOrNoToBoolean } from 'src/utils';
import * as xlsx from 'xlsx';
import { DestinationDto } from './dto/destination.dto';

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
            is_in_france                : boolean;
            has_access_to_mountain       : boolean;
            has_access_to_sea            : boolean;
            has_access_to_lake           : boolean;
            has_party                    : boolean;
            is_historic_place                 : boolean;
            is_wine_region                     : boolean;
            first_privileged_season  : string;
            second_privileged_season : string;
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
              is_in_france: yesOrNoToBoolean(destinationRow['France ?']),
              has_access_to_sea: yesOrNoToBoolean(destinationRow['Accès à la mer ?']), 
              has_access_to_mountain: yesOrNoToBoolean(destinationRow["Accès à la montagne ?"]),
              has_access_to_lake: yesOrNoToBoolean(destinationRow["Accès à un lac ?"]),
              has_party                    : yesOrNoToBoolean(destinationRow["Teuf ?"]),
              is_historic_place                 : yesOrNoToBoolean(destinationRow["Ville historique ?"]),
              is_wine_region                     : yesOrNoToBoolean(destinationRow["Région viticole ?"]),
              first_privileged_season  : destinationRow["Saison privilégiée 1"],
              second_privileged_season : destinationRow["Saison privilégiée 2"]
            });  
          }
        }
        
         const createdDestinatations = await this.prisma.destination.createManyAndReturn({
          data: destinationsList
        });

        return createdDestinatations
    }

    async getDestinationFromCriterion(args: {
      destinationQuery: any;
    }) {
      return await this.prisma.destination.findFirst({
        where: { ...args.destinationQuery }
      })
    }
}
