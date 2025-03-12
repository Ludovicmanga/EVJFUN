import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';

@Injectable()
export class DestinationService {
    importDestinationsList(workbook: xlsx.WorkBook) {
          
        const destinationSheetName = "Destinations";
        const destinationsSheet = workbook.Sheets[destinationSheetName];

        if (!workbook.SheetNames.includes(destinationSheetName)) {
          throw new Error(`Sheet "${destinationSheetName}" not found in the uploaded Excel file.`);
        }
  
        const parsedDestinationsSheet = xlsx.utils.sheet_to_json(destinationsSheet);

        console.log(parsedDestinationsSheet)

        const destinationsList: {
            name                     : string;
            in_france                : boolean;
            access_to_mountain       : boolean;
            access_to_sea:            boolean;
            access_to_lake           : boolean;
            party                    : boolean;
            historic                 : boolean;
            wine                     : boolean;
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
            			
            console.log(destinationRow['Villes'], ' is extracted and it is in', 'France / Étranger ?');
              destinationsList.push({
              name: destinationRow['Villes'],
              in_france: destinationRow['France ?'],
              access_to_sea: destinationRow['Accès à la mer ?'], 
              access_to_mountain: destinationRow["Accès à la montagne ?"],
              access_to_lake: destinationRow["Accès à un lac ?"],
              party                    : destinationRow["Teuf ?"],
              historic                 : destinationRow["Ville historique ?"],
              wine                     : destinationRow["Région viticole ?"],
              first_privileged_season  : destinationRow["Saison privilégiée 1"],
              second_privileged_season : destinationRow["Saison privilégiée 2"]
            });  
          }
        }
        console.log(destinationsList, ' is the list')
        return 'les villes ont été créées ! Rendez-vous sur l\'app pour tester';
    }
}
