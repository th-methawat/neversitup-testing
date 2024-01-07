import { Injectable } from '@nestjs/common';

@Injectable()
export class PermutationsService {
  async getPermutations(input: string): Promise<string[]> {
    // check if the input is a 1 character, the result is itself.
    if (input.length === 1) return [input];

    // create a set to store the permutations
    const permutations = new Set<string>();

    // loop through each character in the input string
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      //   console.log(`input : ${input}`);
      //   console.log(`char : ${char}`);

      // get remaining characters
      const remainingString =
        input.slice(0, i) + input.slice(i + 1, input.length);
      //   console.log(`remainingString : ${remainingString}`);

      // get all permutations of the remaining string
      for (const permutation of await this.getPermutations(remainingString)) {
        permutations.add(char + permutation);
        // console.log(permutations);
      }
    }
    // console.log(Array.from(permutations));
    return Array.from(permutations);
  }
}
