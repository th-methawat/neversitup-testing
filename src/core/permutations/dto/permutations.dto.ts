import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PermutationsInput {
  @IsNotEmpty()
  @ApiProperty({ description: 'Input', example: 'aabb' })
  string_value: string;
}
