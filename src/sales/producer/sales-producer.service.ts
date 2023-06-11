import { Injectable } from '@nestjs/common';
import { ProducerService } from 'src/message-broker/producer/producer.service';
import { SaleDto } from '../dto/SaleDto';
import { CancelDto } from '../dto/CancelDto';

@Injectable()
export class SalesProducerService {
	constructor(private readonly producerService: ProducerService) {}
	async notifyNewSaleAction(messageData: SaleDto) {
		await this.producerService.produce('sales', {
			value: JSON.stringify(messageData),
			key: 'sales',
			headers: { type: 'sale' },
		});
		return 'Sale notified!';
	}
	async notifyNewCancelAction(messageData: CancelDto) {
		await this.producerService.produce('sales', {
			value: JSON.stringify(messageData),
			key: 'sales',
			headers: { type: 'cancel' },
		});
		return 'Cancel notified!';
	}
}
