import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SmileyFacesInput {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Face list',
    isArray: true,
    type: String,
    example: '[";]", ":[", ";*", ":$", ";-D"]',
  })
  face_list: string[];
}
