import { Test, TestingModule } from '@nestjs/testing';
import { SizeproductService } from './sizeproduct.service';

describe('SizeproductService', () => {
  let service: SizeproductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SizeproductService],
    }).compile();

    service = module.get<SizeproductService>(SizeproductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
