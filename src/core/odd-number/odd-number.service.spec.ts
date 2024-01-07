import { Test, TestingModule } from '@nestjs/testing';
import { OddNumberService } from './odd-number.service';

describe('OddNumberService', () => {
  let service: OddNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OddNumberService],
    }).compile();

    service = module.get<OddNumberService>(OddNumberService);
  });

  it('should return the integer that appears an odd number of times', async () => {
    expect(await service.findAppearsOdd([7])).toBe(7);
    expect(await service.findAppearsOdd([0])).toBe(0);
    expect(await service.findAppearsOdd([1, 1, 2])).toBe(2);
    expect(await service.findAppearsOdd([0, 1, 0, 1, 0])).toBe(0);
    expect(
      await service.findAppearsOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]),
    ).toBe(4);
  });
});
