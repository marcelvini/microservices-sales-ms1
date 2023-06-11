import { Module } from '@nestjs/common';
import { FeedbackConsumerService } from './consumer/feedback-consumer.service';

import { MessageBrokerModule } from 'src/message-broker/message-broker.module';

@Module({
	imports: [MessageBrokerModule],
	providers: [FeedbackConsumerService],
})
export class FeedbackModule {}
