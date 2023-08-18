import {Injectable} from '@nestjs/common';
import {response} from 'src/types/response';

@Injectable()
export class CatsService {
 getCats(): response {
  return {
   body: 'Hello from cats',
   statusCode: 200,
  };
 }
}
