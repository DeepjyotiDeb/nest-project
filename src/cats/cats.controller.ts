import {Body, Controller, Get, Post} from '@nestjs/common';
import {CatsService} from './cats.service';
import {response} from 'src/types/response';
import {CreateCatDto} from './dto/create-cat.dto';
import {
 ApiBearerAuth,
 ApiOperation,
 ApiProperty,
 ApiResponse,
 ApiTags,
 getSchemaPath,
} from '@nestjs/swagger';
import {Cat} from './entities/cat.entity';
// import {CreateCatDto} from '../cats/create-cat.dto';

@ApiBearerAuth()
@ApiTags('Cats-A')
@Controller('cats')
export class CatsController {
 constructor(private readonly catsService: CatsService) {}

 @Post()
 //  @ApiProperty()
 //  @ApiResponse({
 //   status: 200,
 //   description: 'The found record',
 //   schema: {$ref: getSchemaPath(CreateCatDto)},
 //   type: Cat,
 //  })
 //  @ApiOperation({summary: 'adding cats'})
 async create(
  @Body()
  createCatDto: CreateCatDto,
 ) {
  console.log('first');
  return `This action adds a new cat ${createCatDto.name}`;
 }

 @Get()
 @ApiResponse({
  status: 200,
  description: 'The found record',
  type: Cat,
 })
 findAll(): string {
  return 'This action returns all cats';
 }
}
