import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './create-category.dto';

@Injectable()
export class CategoryService {

  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  async createCategory(categoryDto: CreateCategoryDto): Promise<Category> {
    const category = new Category();
    category.categoryName = categoryDto.categoryName;
    return await this.categoryRepository.save(category)
  }

  async onModuleInit() {
    try {
        const categoryData = [{
          id: 1,
          categoryName: 'News'
        },
        {
          id: 2,
          categoryName: 'Entertainment',
        }
      ];
        const user = await this.categoryRepository.save(categoryData);
        //console.log(user);
    } catch (error) {throw error;}
  }


}
