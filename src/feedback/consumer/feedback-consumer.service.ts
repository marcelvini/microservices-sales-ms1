import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/message-broker/consumer/consumer.service';

@Injectable()
export class FeedbackConsumerService implements OnModuleInit {
	constructor(private readonly consumerService: ConsumerService) {}

	async onModuleInit() {
		await this.consumerService.consume({
			topic: { topic: 'feedback' },
			config: { groupId: 'feedback-consumer' },
			onMessage: async (message) => {
				console.log({
					value: message.value.toString(),
				});
			},
		});
	}
}
