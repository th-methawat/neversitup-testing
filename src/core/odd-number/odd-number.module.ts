import { Module } from '@nestjs/common';
import { OddNumberService } from './odd-number.service';
import { OddNumberController } from './odd-number.controller';

@Module({
  providers: [OddNumberService],
  controllers: [OddNumberController]
})
export class OddNumberModule {}
