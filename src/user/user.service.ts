import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
/*
import { UpdateUserDto } from './dto/update-user.dto';
*/
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    if (users.length === 0) {
      throw new NotFoundException('USERS_NOT_FOUND');
    }
    return this.prisma.user.findMany();
  }
  async getUsersById(userId: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('USER_NOT_FOUND');
    }
    return user;
  }
  async createUser(user: CreateUserDto): Promise<User> {
    const { password, email } = user;
    const findUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (findUser) {
      throw new BadRequestException('USER_ALREADY_EXIST');
    }
    const hashedPassword = await hash(password, 10);
    user = { ...user, password: hashedPassword };
    return this.prisma.user.create({ data: { ...user } });
  }
  async updateUser(userId: number, userUpdate: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('USER_NOT_FOUND');
    }
    const { password } = userUpdate;
    const hashedPassword = await hash(password, 10);
    userUpdate = { ...userUpdate, password: hashedPassword };
    return this.prisma.user.update({
      where: { id: userId },
      data: userUpdate,
    });
  }
}
