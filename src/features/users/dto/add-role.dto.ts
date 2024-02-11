import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: '1', description: 'id пользователя'})
    @IsNumber({}, {message: "Должно быть числом"})
    readonly userId: number;

    @ApiProperty({example: 'ADMIN', description: 'Название роли'})
    @IsString({message: "Должно быть строкой"})
    readonly value: string;
}
