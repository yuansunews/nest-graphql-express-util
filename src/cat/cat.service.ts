import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
// import { CreateUserDto } from './dto/create-user.dto';
// import Cat from './models/Cat.model';
import { Cat, CatDocument } from './schemas/cat.schema';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat.name, 'USconnection')
    private readonly catModel: Model<CatDocument>,
    @InjectModel(User.name, 'CAconnection')
    private readonly userModel: Model<UserDocument>,
  ) {}

  //   async findCats(): Promise<Cat[]> {
  //     const cat1 = { id: 1, name: 'gg' };
  //     const cat2 = { id: 2, name: 'mmm' };
  //     console.log(process.env.US_DATABASE_CONNECT);
  //     return [cat1, cat2] as any;
  //   }

  async createCat(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catModel.create(createCatDto);
    return createdCat;
  }
  // async createUser(createUserDto: CreateUserDto): Promise<Cat> {
  //   const createdCat = await this.userModel.create(createUserDto);
  //   return createdCat;
  // }
}
