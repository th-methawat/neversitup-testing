import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/neversitup-testing');
  app.useGlobalPipes(new ValidationPipe());

  // Swagger for dev
  const devConfig = new DocumentBuilder()
    .setBasePath('neversitup-testing')
    .addBearerAuth()
    .setTitle('NEVERSITUP-TESTING APP SERVER API')
    .setDescription('')
    .setVersion('0.1')
    .build();
  const devDocument = SwaggerModule.createDocument(app, devConfig);
  SwaggerModule.setup('devdocs', app, devDocument);

  await app.listen(3000);
}
bootstrap();
