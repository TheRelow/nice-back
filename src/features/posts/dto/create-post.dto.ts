import {ApiProperty} from "@nestjs/swagger";
import {IsString, Length} from "class-validator";

export class CreatePostDto {
    @ApiProperty({example: 'Post title', description: 'Название поста'})
    @IsString({message: 'Должно быть строкой'})
    readonly title: string;
    @ApiProperty({example: 'Post content', description: 'Контент поста'})
    @IsString({message: 'Должно быть строкой'})
    @Length(20, 30000, {message: 'Содержимое поста должно быть не меньше 20 и не больше 30.000 символов.'})
    readonly content: string;
    readonly userId: number;
}
