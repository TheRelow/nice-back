import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {FoldersService} from './folders.service';
import {CreateFolderDto} from './dto/create-folder.dto';
import {UpdateFolderDto} from './dto/update-folder.dto';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Task} from "@/features/tasks/tasks.model";

@ApiTags('Задачи')
@Controller('tasks')
export class FoldersController {
  constructor(private tasksService: FoldersService) {}

  @ApiOperation({summary: 'Создание задачи'})
  @Post()
  create(@Body() createTaskDto: CreateFolderDto) {
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
    return this.tasksService.findOne(id);
  }

  @ApiOperation({summary: 'Отредактировать задачу'})
  @ApiResponse({status: 200, type: Task})
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateFolderDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @ApiOperation({summary: 'Удалить задачу'})
  @ApiResponse({status: 200})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tasksService.remove(id);
  }
}
