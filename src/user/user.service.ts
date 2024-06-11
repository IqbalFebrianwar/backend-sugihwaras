import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, genSalt } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CreateUserDto) {
    const checkEmail = await this.findByEmail(dto.email)

    if (checkEmail) {
      throw new ConflictException("Email Sudah Terdaftar")
    }

    const salt = await genSalt(10)
    const hashPassword = await hash(dto.password, salt)
    const newUser = await this.prisma.user.create({
      data: {
        username: dto.username,
        password: hashPassword,
        email: dto.email
      }
    });

    const { password, ...result } = newUser
    return result
  }

  async findAll() {
    const findAllUser = await this.prisma.user.findMany()
    return findAllUser
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true
      }
    });
    return user
  }
  async findByUsername(username: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username
      },
      select: {
        id:true,
        username: true,
        password: true
      }
    })
    return user
  }

  async findByEmail(email: string) {
    const emailUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
      select: { email: true }
    });
    return emailUser
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userUpdate = await this.prisma.user.update({ data: updateUserDto, where: { id } })

    return userUpdate
  }

  async remove(id: string) {
    return this.prisma.user.delete({ where: { id } })
  }
}
