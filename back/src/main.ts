import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 8080;

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'https://evjfun.vercel.app', 'https://evjfun.fr', 'https://www.evjfun.fr'],
    credentials: true
  });
  await app.listen(PORT);
}
bootstrap();
