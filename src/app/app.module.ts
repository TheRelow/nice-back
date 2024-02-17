import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from '@/features/users/users.module';
import {ConfigModule} from "@nestjs/config";
import { RolesModule } from '@/features/roles/roles.module';
import { AuthModule } from '@/auth/auth.module';
import { PostsModule } from '@/features/posts/posts.module';
import {TasksModule} from "@/features/tasks/tasks.module";
import {User} from "@/features/users/users.model";
import {Role} from "@/features/roles/roles.model";
import {UserRoles} from "@/features/roles/user-roles.model";
import {Post} from "@/features/posts/posts.model";
import {CardsModule} from "@/features/cards/cards.module";

console.log('configService.get(\'POSTGRES_PASSWORD\')')

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
      TasksModule,
      CardsModule,
      PostsModule,
      AuthModule,
      UsersModule,
      RolesModule,
    ]
})
export class AppModule {}
