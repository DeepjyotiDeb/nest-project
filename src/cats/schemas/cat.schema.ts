import {HydratedDocument} from 'mongoose';
import {CreateCatDto} from '../dto/create-cat.dto';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
 @Prop()
 name: string;

 @Prop()
 age: number;

 @Prop()
 breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
