import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/message-broker/consumer/consumer.service';
import {
	FEEDBACK_REPOSITORY,
	FeedbackRepository,
} from '../interfaces/feedback.repository';
import { CreateFeedbackDto } from '../dto/CreateFeedbackDto';

@Injectable()
export class FeedbackConsumerService implements OnModuleInit {
	constructor(
		private readonly consumerService: ConsumerService,
		@Inject(FEEDBACK_REPOSITORY)
		private readonly feedbackRepository: FeedbackRepository,
	) {}

	async onModuleInit() {
		await this.consumerService.consume({
			topic: { topic: 'feedback' },
			config: { groupId: 'feedback-consumer' },
			onMessage: async (currentMessage) => {
				const { origin, message } = JSON.parse(
					currentMessage.value.toString(),
				);
				await this.feedbackRepository.createFeedback({
					message,
					origin,
				} as CreateFeedbackDto);
			},
		});
	}
}
