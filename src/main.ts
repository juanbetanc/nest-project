import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validación global, evita la necesidad de incluir el Pipe en cada controlador
  app.useGlobalPipes(new ValidationPipe({
    // Valida los datos que se encuentren en el dto
    whitelist: true
  }));

  app.enableCors({
    origin: "http://localhost:3000"
  })

  await app.listen(3000);
}
bootstrap();
