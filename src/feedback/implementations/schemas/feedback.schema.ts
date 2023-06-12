import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

@Schema()
class Feedback {
	@Prop({ type: Object })
	message: any;

	@Prop({ type: Object })
	origin?: any;

	@Prop({ default: Date.now })
	createdAt: Date;

	@Prop({ default: Date.now })
	updatedAt: Date;
}

export type FeedbackDocument = Feedback & Document;

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);

export type FeedbackModel = Model<FeedbackDocument>;
