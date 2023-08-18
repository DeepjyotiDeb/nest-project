import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {response} from './types/response';

@Controller()
export class AppController {
 constructor(private readonly appService: AppService) {}

 @Get()
 getHello(): response {
  return this.appService.getHello();
 }
}
