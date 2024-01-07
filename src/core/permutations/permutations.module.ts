import { Module } from '@nestjs/common';
import { PermutationsService } from './permutations.service';
import { PermutationsController } from './permutations.controller';

@Module({
  providers: [PermutationsService],
  controllers: [PermutationsController]
})
export class PermutationsModule {}
