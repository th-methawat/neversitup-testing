import { Test, TestingModule } from '@nestjs/testing';
import { OddNumberController } from './odd-number.controller';
import { OddNumberService } from './odd-number.service';

describe('OddNumberController', () => {
  let controller: OddNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OddNumberController],
      providers: [OddNumberService],
    }).compile();

    controller = module.get<OddNumberController>(OddNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
