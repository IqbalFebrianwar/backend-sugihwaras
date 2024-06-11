import { Injectable, UnauthorizedException} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor (private prisma : PrismaService){}
  
  async create(dto: CreateProductDto) {
    const newProduct = await this.prisma.product.create({
      data: {
        title: dto.title,
        rating: dto.rating,
        deskripsi: dto.deskripsi,
        imageProduct: {
          createMany: {
            data: dto.image.map(e => ({path: e}))
          }
        },
        sizeProduct:{
          createMany:{
            data: dto.size.map(e => ({size: e.size, harga: e.harga}))
          }
        },
        orderVia:{
          createMany:{
            data: dto.ordervia.map(e=> ({title: e.title, path: e.path, type: e.type}))
          }
        },
        categoryProduct: {
          createMany: {
            data: dto.categoryIds.map(id => ({ id_category: id }))
          }
        }
      },
      select: {
        id:true
      }
    })
    return newProduct
  }

  async findAll() {
    const findAllProduct = await this.prisma.product.findMany()
    return findAllProduct 
  }

  async findById(id: string) {
    const product = await this.prisma.product.findUnique({
      where:{
        id
      },
      select: {
        id:true,
        title:true,
      }
    })
    if(!product){
      throw new UnauthorizedException("Product tidak di temukan")
    }
    return product
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const updateProduct = await this.prisma.product.update({data: updateProductDto, where:{id}})
    return updateProduct
  }

  async remove(id: string) {
    const removeProduct = await this.prisma.product.delete({where: {id}})
    return removeProduct
  }
}
