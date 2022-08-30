import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './modules/users/user.service';
import { UsersModule } from './modules/users/users.module';
import { UserController } from './modules/users/user.controller';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { CategoriesModule } from './modules/categories/categories.module';
import { PostsModule } from './modules/posts/posts.module';
import { CategoryService } from './modules/categories/category.service';
import { CategoryController } from './modules/categories/category.controller';
import { PostService } from './modules/posts/post.service';
import { PostController } from './modules/posts/post.controller';
import { ConfigModule} from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig), ConfigModule.forRoot({isGlobal: true}),
    UsersModule, AuthModule, CategoriesModule, PostsModule],
  controllers: [AppController, UserController, CategoryController, PostController],
  providers: [AppService, UserService, CategoryService, PostService],
})
export class AppModule {}
