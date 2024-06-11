import { Module } from '@nestjs/common';
import { SizeproductService } from './sizeproduct.service';
import { SizeproductController } from './sizeproduct.controller';

@Module({
  controllers: [SizeproductController],
  providers: [SizeproductService],
})
export class SizeproductModule {}
