import { Module } from '@nestjs/common';
import { SalesProducerService } from './producer/sales-producer.service';
import { MessageBrokerModule } from 'src/message-broker/message-broker.module';
import { SalesController } from './sales.controller';

@Module({
	imports: [MessageBrokerModule],
	providers: [SalesProducerService],
	controllers: [SalesController],
})
export class SalesModule {}
