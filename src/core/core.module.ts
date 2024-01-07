import { Module } from '@nestjs/common';
import { PermutationsModule } from './permutations/permutations.module';
import { OddNumberModule } from './odd-number/odd-number.module';
import { SmileyFacesModule } from './smiley-faces/smiley-faces.module';

@Module({
  imports: [PermutationsModule, OddNumberModule, SmileyFacesModule]
})
export class CoreModule {}
