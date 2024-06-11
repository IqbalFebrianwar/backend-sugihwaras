import { Test, TestingModule } from '@nestjs/testing';
import { SizeproductController } from './sizeproduct.controller';
import { SizeproductService } from './sizeproduct.service';

describe('SizeproductController', () => {
  let controller: SizeproductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SizeproductController],
      providers: [SizeproductService],
    }).compile();

    controller = module.get<SizeproductController>(SizeproductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
