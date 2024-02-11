import {Body, Controller, Get, Post, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Посты')
@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'Создание поста'})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto) {
        return this.postService.create(dto)
    }

    @ApiOperation({summary: 'Получить все посты'})
    @ApiResponse({status: 200, type: [Post]})
    @Get()
    getAll() {
        return this.postService.getAllPosts();
    }
}
