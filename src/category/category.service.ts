import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor (private prisma : PrismaService){}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.prisma.category.create({
      data: {
        title: createCategoryDto.title
      }
    })
    return newCategory
  }

  async findAll() {
    const findAllCategory = await this.prisma.category.findMany()
    return findAllCategory
  }

  async findById(id: string) {
    const findByIdCategory = await this.prisma.category.findUnique({
      where: {id}
    })
    return findByIdCategory
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const updateCategory = await this.prisma.category.update({data:updateCategoryDto, where:{id}})
    return updateCategory
  }

  async remove(id: string) {
    const removeCategory = await this.prisma.category.delete({where : {id}})
  }
}
