/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-04-16 01:00:22
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-04-16 13:33:19
 * @FilePath: /blog/blog-server/src/main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4001);
}
bootstrap();
