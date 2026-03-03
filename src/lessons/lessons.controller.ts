import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.create(createLessonDto);
  }

  @Post(':id/conducted')
  conducted(@Param('id') id: string) {
    return this.lessonsService.conducted(id);
  }

  @Get()
  findAll() {
    return this.lessonsService.findAll();
  }

}
