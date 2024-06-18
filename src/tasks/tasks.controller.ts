import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task-dto';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('tasks')
export class TasksController {
        
    constructor(private taskService: TasksService) {}

    @Get() 
    getAllTasks(){
        return this.taskService.getTasks();
    }


    //ValidationPipe
    // ParseIntPipe
    // ParseFloatPipe
    // ParseBoolPipe
    // ParseArrayPipe
    // ParseUUIDPipe
    // ParseEnumPipe
    // DefaultValuePipe
    // ParseFilePipe

    // Los parametros que vienen de la url siempre son de tipo String
    // Por ese motivo se utiliza ParseIntPipe, para convertirlo a un 
    // Número entero 
    @Get('/:id')
    getTask(@Param('id', ParseIntPipe) id: number){
        return this.taskService.getTask(id);
    }

    @Post()     
    @UseGuards(AuthGuard)
    @HttpCode(201)
    // Recibe un objeto de tipo "CreateTaskDto" y lo envía al service
    createTask(@Body() task: CreateTaskDto){        
        return this.taskService.createTask(task);
    }
    
    @Put()
    updateTask(@Req() request: Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({message: 'Task updated'});

    }

}