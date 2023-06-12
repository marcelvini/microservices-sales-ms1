import { Module } from '@nestjs/common';
import { FeedbackConsumerService } from './consumer/feedback-consumer.service';

import { MessageBrokerModule } from 'src/message-broker/message-broker.module';
import { MongooseModule } from '@nestjs/mongoose';

import { FeedbackSchema } from './implementations/schemas/feedback.schema';
import { Feedback } from './entities/feedback.entity';
import { FEEDBACK_REPOSITORY } from './interfaces/feedback.repository';
import { FeedbackMongoRepository } from './implementations/repositories/feedback-mongo.repository';

@Module({
	imports: [
		MessageBrokerModule,
		MongooseModule.forFeature([
			{ name: Feedback.name, schema: FeedbackSchema },
		]),
	],
	providers: [
		FeedbackConsumerService,
		{
			provide: FEEDBACK_REPOSITORY,
			useClass: FeedbackMongoRepository,
		},
	],
	exports: [FEEDBACK_REPOSITORY],
})
export class FeedbackModule {}
