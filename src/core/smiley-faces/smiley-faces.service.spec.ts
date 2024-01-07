import { Test, TestingModule } from '@nestjs/testing';
import { SmileyFacesService } from './smiley-faces.service';

describe('SmileyFacesService', () => {
  let service: SmileyFacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmileyFacesService],
    }).compile();

    service = module.get<SmileyFacesService>(SmileyFacesService);
  });

  it('should return the total number of valid smiley faces', () => {
    expect(service.countSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
    expect(service.countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
    expect(service.countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });
});
