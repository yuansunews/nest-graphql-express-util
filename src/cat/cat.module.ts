import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatResolver } from './cat.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Cat.name, schema: CatSchema, collection: 'us-collection' }],
      'USconnection',
    ),
    MongooseModule.forFeature(
      [
        {
          name: User.name,
          schema: UserSchema,
          collection: 'ca-collection-test',
        },
      ],
      'CAconnection',
    ),
  ],
  providers: [CatService, CatResolver],
})
export class CatModule {}
