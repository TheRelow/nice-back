import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFolderDto } from './create-folder.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateFolderDto extends PartialType(CreateFolderDto) {
    @ApiProperty({example: '1', description: 'id родительской папки'})
    @IsNumber({}, {message: "Должно быть числом"})
    @IsOptional()
    readonly parentId: number;
}
