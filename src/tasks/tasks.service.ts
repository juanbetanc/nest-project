import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

@Injectable()
export class TasksService{

    private task = [];

    getTasks(): Task{
        return {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            completed: false
        };
    }

    getTask(id: number){
        return this.task.find(task => task.id === id);
    }

    // Recibe el objeto task de tipo "CreateTaskDto" desde el controller y lo añade al array "task"
    createTask(task: CreateTaskDto) {
        this.task.push(task);
        return task;
    }

    deleteTask(){
        return "Task deleted";
    }

    updateTask(){
        return "Task updated";
    }
}