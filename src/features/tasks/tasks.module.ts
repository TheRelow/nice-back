import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "@/features/users/users.model";
import {Task} from "@/features/tasks/tasks.model";

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    SequelizeModule.forFeature([User, Task])]
})
export class TasksModule {}
