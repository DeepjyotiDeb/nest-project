import {Injectable} from '@nestjs/common';
import {response} from './types/response';

@Injectable()
export class AppService {
 getHello(): response {
  return {
   body: 'Hello from nest',
   statusCode: 200,
  };
 }
}
