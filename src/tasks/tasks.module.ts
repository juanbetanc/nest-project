import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
    controllers: [TasksController],
    providers: [ TasksService ],
})
export class TasksModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        // for.Routes({ 
        //     path: '/tasks', method: RequestMethod.GET },
        // )
        consumer.apply(LoggerMiddleware).forRoutes('tasks')
        // Para añadir más middlewares se debe llamar de nuevo al apply
    }
}