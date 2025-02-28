import { Body, Controller, Get, Logger, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./order.dto";
import { Ctx, RmqContext } from "@nestjs/microservices";

@Controller('orders')
export class OrderController {
    private readonly logger = new Logger(OrderController.name);

    constructor(
        private readonly orderService: OrderService,
    ) { }

    @Post()
    async createOrder(
        @Body() dto: CreateOrderDto
    ) {
        return this.orderService.createOrder(dto);
    }

    @Get()
    getOrders(
    ) {
        return this.orderService.getOrders();
    }
}