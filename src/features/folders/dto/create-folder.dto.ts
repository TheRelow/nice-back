import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString, Length} from "class-validator";

export class CreateFolderDto {
  @ApiProperty({example: 'Task title', description: 'Название задачи'})
  @IsString({message: 'Должно быть строкой'})
  readonly title: string;

  @ApiProperty({example: 'Task content', description: 'Контент задачи'})
  @IsString({message: 'Должно быть строкой'})
  @Length(20, 30000, {message: 'Содержимое задачи должно быть не меньше 20 и не больше 30.000 символов.'})
  readonly content: string;

  @ApiProperty({example: '1', description: 'id пользователя'})
  @IsNumber({}, {message: "Должно быть числом"})
  readonly userId: number;
}
