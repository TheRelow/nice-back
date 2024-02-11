import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Название роли'})
    @IsString({message: "Должно быть строкой"})
    readonly value: string;

    @ApiProperty({example: 'Доступ ко всем данным приложения', description: 'Описание роли'})
    @IsString({message: "Должно быть строкой"})
    readonly description: string;
}
