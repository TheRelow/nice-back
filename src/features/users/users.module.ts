import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Role} from "@/features/roles/roles.model";
import {UserRoles} from "@/features/roles/user-roles.model";
import {RolesModule} from "@/features/roles/roles.module";
import {AuthModule} from "@/auth/auth.module";
import {Post} from "@/features/posts/posts.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Role, UserRoles, Post]),
      RolesModule,
      forwardRef(() => AuthModule),
  ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}
