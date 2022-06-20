import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { CreateUserDto } from './dto/create-user.dto';
import Cat from './models/cat.model';
// import { Cat } from './schemas/cat.schema';
import { User } from './schemas/user.schema';

@Resolver((of) => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}
  //   @Query((returns) => [Cat])
  //   async getCats() {
  //     const cats = await this.catService.findCats();
  //     return cats;
  //   }
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
  @Mutation((returns) => Cat)
  async addCat(
    @Args({ name: 'catName', type: () => String }) catArgs: CreateCatDto,
  ) {
    return this.catService.createCat(catArgs);
  }

  // @Mutation((returns) => User)
  // async addUser(
  //   @Args({ name: 'userName', type: () => String }) userArgs: CreateUserDto,
  // ) {
  //   return this.catService.createUser(userArgs);
  // }
}
