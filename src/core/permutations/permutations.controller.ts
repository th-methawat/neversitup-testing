import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermutationsService } from './permutations.service';
import { PermutationsInput } from './dto/permutations.dto';

@ApiTags('PERMUTATIONS')
@Controller('permutations')
export class PermutationsController {
  constructor(private readonly permutationsService: PermutationsService) {}

  @Post()
  @HttpCode(200)
  async getPermutations(@Body() input: PermutationsInput) {
    return await this.permutationsService.getPermutations(input.string_value);
  }
}
