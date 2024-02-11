import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Task} from "@/features/tasks/tasks.model";

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.create(createTaskDto);
  }

  async findAll() {
    return await this.taskRepository.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.taskRepository.findByPk(id);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const [rowsUpdated, [updatedTask]] = await this.taskRepository.update(updateTaskDto, {
      where: { id },
      returning: true, // Important to get the updated row back
    });
    if (rowsUpdated > 0) {
      return updatedTask;
    } else {
      throw new HttpException(`Task with ID ${id} not found`, HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    const rowsDeleted = await this.taskRepository.destroy({ where: { id } });
    if (rowsDeleted > 0) {
      return `Task with ID ${id} has been successfully deleted`;
    } else {
      throw new HttpException(`Task with ID ${id} not found`, HttpStatus.NOT_FOUND);
    }
  }
}
