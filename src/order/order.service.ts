import { Inject, Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./order.dto";
import { InjectionToken, RabbitMqPatterns } from "src/app.enums";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class OrderService {
    constructor(
        @Inject(InjectionToken.RABBITMQ_SERVICE) private readonly rabbitMQService: ClientProxy
    ) { }

    async createOrder(dto: CreateOrderDto) {
        this.rabbitMQService.emit(RabbitMqPatterns.ORDER_CREATED, dto);

        return { message: 'Order created' };
    }
}