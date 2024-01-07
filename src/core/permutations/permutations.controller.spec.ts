import { Test, TestingModule } from '@nestjs/testing';
import { PermutationsController } from './permutations.controller';
import { PermutationsService } from './permutations.service';

describe('PermutationsController', () => {
  let controller: PermutationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermutationsController],
      providers: [PermutationsService],
    }).compile();

    controller = module.get<PermutationsController>(PermutationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
