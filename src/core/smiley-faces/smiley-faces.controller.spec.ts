import { Test, TestingModule } from '@nestjs/testing';
import { SmileyFacesController } from './smiley-faces.controller';
import { SmileyFacesService } from './smiley-faces.service';

describe('SmileyFacesController', () => {
  let controller: SmileyFacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmileyFacesController],
      providers: [SmileyFacesService],
    }).compile();

    controller = module.get<SmileyFacesController>(SmileyFacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
