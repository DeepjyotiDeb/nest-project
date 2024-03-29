import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import fastifyHelmet from '@fastify/helmet';

async function bootstrap() {
 const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter({logger: true}),
 );
 app.register(fastifyHelmet, {
  contentSecurityPolicy: {
   directives: {
    defaultSrc: [`'self'`],
    styleSrc: [`'self'`, `'unsafe-inline'`],
    imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
    scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
   },
  },
 });
 const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document);

 await app.listen(3000, '0.0.0.0');
 console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
