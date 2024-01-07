import { Test, TestingModule } from '@nestjs/testing';
import { PermutationsService } from './permutations.service';

describe('PermutationsService', () => {
  let service: PermutationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermutationsService],
    }).compile();

    service = module.get<PermutationsService>(PermutationsService);
  });

  it('should return all permutations of a string', async () => {
    expect(await service.getPermutations('a')).toEqual(['a']);
    expect((await service.getPermutations('ab')).sort()).toEqual(['ab', 'ba']);
    expect((await service.getPermutations('abc')).sort()).toEqual([
      'abc',
      'acb',
      'bac',
      'bca',
      'cab',
      'cba',
    ]);
    expect((await service.getPermutations('aabb')).sort()).toEqual([
      'aabb',
      'abab',
      'abba',
      'baab',
      'baba',
      'bbaa',
    ]);
  });
});
