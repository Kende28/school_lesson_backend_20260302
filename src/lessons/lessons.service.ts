import { HttpException, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LessonsService {
  constructor (private readonly prisma: PrismaService){}

  async create(createLessonDto: CreateLessonDto) {
    return this.prisma.lessons.create({data: createLessonDto});
  }

  async findAll() {
    return await this.prisma.lessons.findMany({select: {subject: true, teacher: true, class_level: true, scheduled_hours: true}});
  }

  async conducted(id: string) {
    const lesson = await this.prisma.lessons.findUnique({where: {id: parseInt(id)}})
    if (!lesson) {
      throw new HttpException("Tanóra nem található", 404)
    }
    return this.prisma.conducted_lessons.create({
      data: {
        lesson_id: parseInt(id)
      }
    });
  }

}
