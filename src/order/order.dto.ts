import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty({
        example: 'test@test.com',
    })
    email: string;

    @ApiProperty({
        example: 'Product 1',
    })
    productName: string

    @ApiProperty({
        example: 100,
    })
    quantity: number;
}