import { Controller, Get, Post, Body  } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/register')
    async register(@Body() userData: CreateUserDto) {
        return await this.userService.create(userData);
      }

  @Post('/login')
    login(): string {
        //return this.userService.getUser();
        return "this.userService.getUser()";
      }

    @Get('/allusers')
    async allusers(): Promise<User[]> {
      return await this.userService.findAll();
    }
}
