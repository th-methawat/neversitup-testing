import { Module } from '@nestjs/common';
import { SmileyFacesService } from './smiley-faces.service';
import { SmileyFacesController } from './smiley-faces.controller';

@Module({
  providers: [SmileyFacesService],
  controllers: [SmileyFacesController]
})
export class SmileyFacesModule {}
