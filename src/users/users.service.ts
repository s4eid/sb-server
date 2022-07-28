import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserAddressService } from 'src/user_address/user_address.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }
  register(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }
  findAll() {
    const user = this.prisma.users.findMany();
    return user;
  }

  findOne(email: string) {
    const user = this.prisma.users.findUnique({
      where: { email: email },
    });
    return user;
  }
  findOneWithId(id: string) {
    const user = this.prisma.users.findUnique({
      where: { user_id: id },
    });
    return user;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
