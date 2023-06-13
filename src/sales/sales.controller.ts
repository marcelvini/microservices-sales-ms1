import { Body, Controller, Post } from '@nestjs/common';
import { SalesProducerService } from './producer/sales-producer.service';
import { SaleDto } from './dto/SaleDto';
import { CancelDto } from './dto/CancelDto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('sales')
@Controller('sales')
export class SalesController {
	constructor(private readonly salesProducerService: SalesProducerService) {}
	@Post('sale')
	async sale(@Body() saleDto: SaleDto) {
		return this.salesProducerService.notifyNewSaleAction(saleDto);
	}
	@Post('cancel')
	cancel(@Body() cancelDto: CancelDto) {
		return this.salesProducerService.notifyNewCancelAction(cancelDto);
	}
}
