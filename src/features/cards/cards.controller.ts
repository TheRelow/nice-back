import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Card} from "@/features/cards/cards.model";

@ApiTags('Карточки')
@Controller('cards')
export class CardsController {
  constructor() {}

  @ApiOperation({summary: 'Создание карточки'})
  @Post()
  create() {
  }

  @ApiOperation({summary: 'Получить все карточки'})
  @ApiResponse({status: 200, type: [Card]})
  @Get()
  findAll() {
  }

  @ApiOperation({summary: 'Получить карточку'})
  @ApiResponse({status: 200, type: Card})
  @Get(':id')
  findOne(@Param('id') id: number) {
  }

  @ApiOperation({summary: 'Отредактировать карточку'})
  @ApiResponse({status: 200, type: Card})
  @Patch(':id')
  update(@Param('id') id: number) {
  }

  @ApiOperation({summary: 'Удалить карточку'})
  @ApiResponse({status: 200})
  @Delete(':id')
  remove(@Param('id') id: number) {
  }
}
