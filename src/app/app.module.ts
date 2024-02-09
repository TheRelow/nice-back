import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from '@/features/users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "@/features/users/users.model";
import { RolesModule } from '@/features/roles/roles.module';
import {Role} from "@/features/roles/roles.model";
import {UserRoles} from "@/features/roles/user-roles.model";
import { AuthModule } from '@/auth/auth.module';
import { PostsModule } from '@/features/posts/posts.module';
import {Post} from "@/features/posts/posts.model";
import {TasksModule} from "@/features/tasks/tasks.module";

@Module({
    controllers: [],
    providers: [],
    imports: [
      ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRESS_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [User, Role, UserRoles, Post],
        autoLoadModels: true,
      }),
      UsersModule,
      RolesModule,
      AuthModule,
      PostsModule,
      TasksModule
    ]
})
export class AppModule {}
