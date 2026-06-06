import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AppValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(AppValidationPipe);
  const config = app.get(ConfigService);
  const port = config.get<number>('PORT') || Number(process.env.PORT) || 3000;
  await app.listen(Number(port));
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
