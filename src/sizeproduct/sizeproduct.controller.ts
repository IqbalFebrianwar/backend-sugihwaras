import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SizeproductService } from './sizeproduct.service';
import { CreateSizeproductDto } from './dto/create-sizeproduct.dto';
import { UpdateSizeproductDto } from './dto/update-sizeproduct.dto';

@Controller('sizeproduct')
export class SizeproductController {
  constructor(private readonly sizeproductService: SizeproductService) {}

  @Post()
  create(@Body() createSizeproductDto: CreateSizeproductDto) {
    return this.sizeproductService.create(createSizeproductDto);
  }

  @Get()
  findAll() {
    return this.sizeproductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sizeproductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSizeproductDto: UpdateSizeproductDto) {
    return this.sizeproductService.update(+id, updateSizeproductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sizeproductService.remove(+id);
  }
}
