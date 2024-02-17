import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import {IsBoolean, IsOptional, IsString, Length} from "class-validator";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({example: false, description: 'Выполнена ли задача'})
  @IsBoolean({message: 'Должно быть boolean'})
  @IsOptional()
  readonly isDone?: boolean;
}
