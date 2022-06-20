import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { MongoModule } from './mongo/mongo.module';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { User, UserSchema } from './cat/schemas/user.schema';
// import { Cat, CatSchema } from './cat/schemas/cat.schema';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    MongoModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.US_DATABASE_CONNECT, {
      connectionName: 'USconnection',
    }),
    // MongooseModule.forRoot(process.env.US_DATABASE_CONNECT),
    MongooseModule.forRoot(process.env.CA_DATABASE_CONNECT, {
      connectionName: 'CAconnection',
    }),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
