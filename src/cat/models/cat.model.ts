import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'cat' })
class Cat {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;
}
export default Cat;
