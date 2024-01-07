import { Injectable } from '@nestjs/common';

@Injectable()
export class SmileyFacesService {
  countSmileys(input: string[]): number {
    // set the pattern of smiley faces
    const smileyPattern = /^[:;][-~]?[)D]$/;

    // filter the smiley faces and get count
    return input.filter((face) => smileyPattern.test(face)).length;
  }
}
