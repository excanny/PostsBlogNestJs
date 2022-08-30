import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';


@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = userDto.firstname;
    user.lastName = userDto.lastname;
    user.email = userDto.email;
    user.password = userDto.password;
    user.isActive = true;
    return this.usersRepository.save(user)
  }

  async onModuleInit() {
    try {
        const usersData = [{
          id: 1,
          firstName: 'John',
          lastName: 'Smith',
          email: 'john@gmail.com',
          password: 'john@gmail.com',
          isActive: true
        },
        {
          id: 2,
          firstName: 'Ken',
          lastName: 'Goodeen',
          email: 'ken@gmail.com',
          password: 'ken@gmail.com',
          isActive: true
        }
      ];
        const user = await this.usersRepository.save(usersData); // this method creates new user in database
        //console.log(user);
    } catch (error) {throw error;}
  }

}
