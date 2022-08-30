import { Controller, Get, Post, Body  } from '@nestjs/common';
import { CreateCategoryDto } from './create-category.dto';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post('/create')
    async register(@Body() categoryData: CreateCategoryDto) {
        return await this.categoryService.createCategory(categoryData);
      }
}
