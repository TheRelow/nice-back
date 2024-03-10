import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsOptional, IsString, Length} from "class-validator";

export class CreateFolderDto {
  @ApiProperty({example: 'Folder title', description: 'Название папки'})
  @IsString({message: 'Должно быть строкой'})
  readonly title: string;

  @ApiProperty({example: 'Folder content', description: 'Контент папки'})
  @IsString({message: 'Должно быть строкой'})
  @Length(20, 30000, {message: 'Содержимое задачи должно быть не меньше 20 и не больше 30.000 символов.'})
  @IsOptional()
  readonly content: string;

  @ApiProperty({example: '1', description: 'id пользователя'})
  @IsNumber({}, {message: "Должно быть числом"})
  @IsOptional()
  readonly userId: number;
}
