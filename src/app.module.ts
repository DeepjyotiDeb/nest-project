import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CatsController} from './cats/cats.controller';
import {CatsService} from './cats/cats.service';
import {DevtoolsModule} from '@nestjs/devtools-integration';
import {RandomServiceController} from './random-service/random-service.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {UserModule} from './user/user.module';
import {ConfigModule} from '@nestjs/config';

@Module({
 imports: [
  ConfigModule.forRoot({cache: true}),
  MongooseModule.forRoot(process.env.DATABASE_URL),
  DevtoolsModule.register({
   http: process.env.NODE_ENV !== 'production',
  }),
  UserModule,
 ],
 controllers: [AppController, CatsController, RandomServiceController],
 providers: [AppService, CatsService],
})
export class AppModule {}
