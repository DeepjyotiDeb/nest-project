import {Test, TestingModule} from '@nestjs/testing';
import {RandomServiceController} from './random-service.controller';

describe('RandomServiceController', () => {
 let controller: RandomServiceController;

 beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
   controllers: [RandomServiceController],
  }).compile();

  controller = module.get<RandomServiceController>(RandomServiceController);
 });

 it('should be defined', () => {
  expect(controller).toBeDefined();
 });
});
