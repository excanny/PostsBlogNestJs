import { Controller, Get, Post, Body  } from '@nestjs/common';
import { CreatePostDto } from './create-post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    // @Post('/create')
    // async register(@Body() postData: CreatePostDto) {
    //     return await this.postService.createPost(postData);
    //   }
}
