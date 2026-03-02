import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), LessonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
