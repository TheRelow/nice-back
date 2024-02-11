import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Task} from "@/features/tasks/tasks.model";

@ApiTags('Задачи')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOperation({summary: 'Создание задачи'})
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @ApiOperation({summary: 'Получить все задачи'})
  @ApiResponse({status: 200, type: [Task]})
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @ApiOperation({summary: 'Получить задачу'})
  @ApiResponse({status: 200, type: Task})
  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('getting task')
    const task = this.tasksService.findOne(id);
    console.log('task', task)
    return task;
  }

  @ApiOperation({summary: 'Отредактировать задачу'})
  @ApiResponse({status: 200, type: Task})
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @ApiOperation({summary: 'Удалить задачу'})
  @ApiResponse({status: 200})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tasksService.remove(id);
  }
}
