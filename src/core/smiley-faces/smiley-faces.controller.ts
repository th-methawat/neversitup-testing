import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SmileyFacesService } from './smiley-faces.service';
import { SmileyFacesInput } from './dto/smiley-faces.dto';

@ApiTags('SMILEY FACES')
@Controller('smiley-faces')
export class SmileyFacesController {
  constructor(private readonly smileyFacesService: SmileyFacesService) {}

  @Post()
  @HttpCode(200)
  async countSmileys(@Body() input: SmileyFacesInput) {
    return await this.smileyFacesService.countSmileys(input.face_list);
  }
}
