import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {FoldersService} from './folders.service';
import {CreateFolderDto} from './dto/create-folder.dto';
import {UpdateFolderDto} from './dto/update-folder.dto';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Folder} from "@/features/folders/folders.model";

@ApiTags('Папки')
@Controller('folders')
export class FoldersController {
  constructor(private foldersService: FoldersService) {}

  @ApiOperation({summary: 'Создание папки'})
  @Post()
  create(@Body() createFolderDto: CreateFolderDto) {
    return this.foldersService.create(createFolderDto);
  }

  @ApiOperation({summary: 'Получить все папки'})
  @ApiResponse({status: 200, type: [Folder]})
  @Get()
  findAll() {
    return this.foldersService.findAll();
  }

  @ApiOperation({summary: 'Получить папку'})
  @ApiResponse({status: 200, type: Folder})
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.foldersService.findOne(id);
  }

  @ApiOperation({summary: 'Отредактировать папку'})
  @ApiResponse({status: 200, type: Folder})
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFolderDto: UpdateFolderDto) {
    return this.foldersService.update(id, updateFolderDto);
  }

  @ApiOperation({summary: 'Удалить папку'})
  @ApiResponse({status: 200})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.foldersService.remove(id);
  }
}
