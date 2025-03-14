import { Controller, Get, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import * as xlsx from 'xlsx';
import { DestinationService } from './destination.service';
import { getDestinationQuery } from 'src/utils';
import { Destination } from '@prisma/client';

@Controller('destination')
export class DestinationController {
    constructor(private destinationService: DestinationService){}

    @Post('get-destination-from-criterion')
    async getDestination(@Req() req, @Res() res) {
        const {
            is_in_france,
            season,
            travelDetails

        } = req.body;

        const destinationQuery = getDestinationQuery(is_in_france, season, travelDetails);

        const destinationFoundResponse = await this.destinationService.getDestinationFromCriterion({
            destinationQuery,
        });
        
        let destinationFound;

        if (destinationFoundResponse) {
          destinationFound = destinationFoundResponse.name;
        } else {
          destinationFound = "NO_DESTINATION_FOUND";
        }

        res.send(destinationFound);
    }

    @Get('import-list')
    getFileUploadForm(): string {
      return `
        <html>
        <body>
          <h1>Importer de nouvelles villes</h1>
          <form action="upload-list" method="post" enctype="multipart/form-data">
            <input type="file" name="file" required />
            <button type="submit">Envoyer</button>
          </form>
        </body>
        </html>
      `;
    }
   
    @Post('upload-list')
    @UseInterceptors(
      FileInterceptor('file', {
        storage: memoryStorage(),
      }),
    )
    async handleFileUpload(@UploadedFile() file: any): Promise<string> {
      if (!file) {
        throw new Error('File upload failed.');
      }
      try {
        const workbook = xlsx.read(file.buffer, { type: 'buffer' });

        const importedDestinations = await this.destinationService.importDestinationsList(workbook);
  
        if (importedDestinations) {
          return "les villes ont été créées ! Rendez-vous sur l'app pour tester"
        }
  
      } catch (error) {
        console.error('Error processing file:', error);
        throw new Error('Failed to process the Excel file.');
      }
    }
}
