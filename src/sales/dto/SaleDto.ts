import { ApiProperty } from '@nestjs/swagger';

class SaleDto {
	@ApiProperty({
		example: '318440fb7491',
		description: 'its the service key.',
	})
	serviceKey: string;
	@ApiProperty({
		example: 'any@email.com',
		description: 'its the buyer email.',
	})
	buyerEmail: string;
	@ApiProperty({
		example: '123456',
		description: 'its the product id.',
	})
	productId: string;
}
export { SaleDto };
