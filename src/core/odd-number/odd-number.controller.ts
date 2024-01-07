import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OddNumberService } from './odd-number.service';
import { OddNumberInput } from './dto/odd-number.dto';

@ApiTags('ODD NUMBER')
@Controller('odd-number')
export class OddNumberController {
  constructor(private readonly oddNumberService: OddNumberService) {}

  @Post()
  @HttpCode(200)
  async findAppearsOdd(@Body() input: OddNumberInput) {
    return await this.oddNumberService.findAppearsOdd(input.number_list);
  }
}
