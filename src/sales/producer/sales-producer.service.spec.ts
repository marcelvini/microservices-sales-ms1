import { Test, TestingModule } from '@nestjs/testing';
import { SalesProducerService } from './sales-producer.service';

describe('SalesProducerService', () => {
	let service: SalesProducerService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [SalesProducerService],
		}).compile();

		service = module.get<SalesProducerService>(SalesProducerService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
