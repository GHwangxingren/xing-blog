/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-04-16 01:00:22
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-04-16 13:34:16
 * @FilePath: /blog/blog-server/src/app.service.ts
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World2!';
  }
}
