import { IsDecimal, IsNotEmpty, IsString } from "class-validator"

export class CreateLessonDto {
    @IsNotEmpty()
    @IsString()    
    subject: string
    
    @IsNotEmpty()
    @IsString()
    teacher: string         
    
    @IsNotEmpty()
    @IsString()
    class_level: string    
    
    @IsNotEmpty()
    @IsDecimal()
    scheduled_hours: number 
}
