import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './Post.entity';
import { CreatePostDto } from './create-post.dto';
import { User } from '../users/user.entity';

@Injectable()
export class PostService {

  constructor(@InjectRepository(Post) private postRepository: Repository<Post>, @InjectRepository(User) private usersRepository: Repository<User>) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }

  async createPost(postDto: CreatePostDto): Promise<Post> {
    const post = new Post();
    post.categoryId = postDto.categoryId;
    post.title = postDto.title;
    post.content = postDto.content;
    //post.user = postDto.
    return this.postRepository.save(post);
  }

  async onModuleInit() {
    try {

        const postsData = [{
          id: 1,
          categoryId: 1,
          title: 'First topic',
          content: 'This is John\'s post',
          user: await this.usersRepository.findOneBy({id:1})
        },
        {
          id: 2,
          categoryId: 2,
          title: 'Second Topic',
          content: 'This is Ken\'s post',
          user: await this.usersRepository.findOneBy({id:2}),
        }
      ];
      const posts = await this.postRepository.save(postsData);
        console.log(posts);
    } catch (error) {throw error;}
  }
}
