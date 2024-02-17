import { Module } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { FoldersController } from './folders.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "@/features/users/users.model";
import {Folder} from "@/features/folders/folders.model";

@Module({
  controllers: [FoldersController],
  providers: [FoldersService],
  imports: [
    SequelizeModule.forFeature([User, Folder])]
})
export class FoldersModule {}
