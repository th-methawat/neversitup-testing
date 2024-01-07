import { Injectable } from '@nestjs/common';

@Injectable()
export class OddNumberService {
  async findAppearsOdd(numberList: number[]): Promise<number> {
    const counts = new Map<number, number>();
    // count the number of times each number appears
    for (const num of numberList) {
      counts.set(num, (counts.get(num) || 0) + 1);
    }
    for (const [num, count] of counts) {
      // check if the number of times each number appears is odd
      if (count % 2 !== 0) {
        // console.log(`return num : ${num}`);
        return num;
      }
    }
    // This line should never be reached.
    return 0;
  }
}
