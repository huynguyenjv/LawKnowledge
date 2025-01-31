import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.setGlobalPrefix('api/v1/');
  await app.listen(process.env.PORT || 8081);
}

void (async (): Promise<void> => {
  try {
    await bootstrap();
    Logger.log(`🚀 Auth Service is running`);
  } catch (error) {
    Logger.error(error, '❌ Error starting server');
  }
})();
