import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackConsumerService } from './feedback-consumer.service';

describe('FeedbackConsumerService', () => {
	let service: FeedbackConsumerService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [FeedbackConsumerService],
		}).compile();

		service = module.get<FeedbackConsumerService>(FeedbackConsumerService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
