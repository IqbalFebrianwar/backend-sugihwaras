import { Injectable } from '@nestjs/common';
import { CreateSizeproductDto } from './dto/create-sizeproduct.dto';
import { UpdateSizeproductDto } from './dto/update-sizeproduct.dto';

@Injectable()
export class SizeproductService {
  create(createSizeproductDto: CreateSizeproductDto) {
    return 'This action adds a new sizeproduct';
  }

  findAll() {
    return `This action returns all sizeproduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sizeproduct`;
  }

  update(id: number, updateSizeproductDto: UpdateSizeproductDto) {
    return `This action updates a #${id} sizeproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} sizeproduct`;
  }
}
