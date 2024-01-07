import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class OddNumberInput {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Number list',
    isArray: true,
    type: Number,
    example: '[1,2,2,3,3,3,4,3,3,3,2,2,1]',
  })
  number_list: number[];
}
