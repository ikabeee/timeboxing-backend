import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Pipes
  app.useGlobalPipes(new ValidationPipe());
  //Endpoints documentation
  const config = new DocumentBuilder()
    .setTitle('Timeboxing App')
    .setDescription('Application to manage activity time')
    .setVersion('1.0')
    .addTag('timeboxing')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  //Enable port 3000
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
