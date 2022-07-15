import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { TrainersModule } from './trainers/trainers.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { CoursesModule } from './courses/courses.module';
import { PlansModule } from './plans/plans.module';
import { UserCoursesModule } from './user_courses/user_courses.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // app.module.ts
      context: ({ req, res }) => ({ req, res }),
      cors: {
        origin: ['http://localhost:3001'],
        credentials: true,
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TrainersModule,
    CoursesModule,
    PlansModule,
    UserCoursesModule,
    UsersModule,
    AuthModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}