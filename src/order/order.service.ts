import { Inject, Injectable, Logger } from "@nestjs/common";
import { CreateOrderDto } from "./order.dto";
import { InjectionToken, RabbitMqPatterns } from "src/app.enums";
import { ClientProxy } from "@nestjs/microservices";
import { timeout } from "rxjs";

@Injectable()
export class OrderService {
    private readonly logger = new Logger(OrderService.name);

    constructor(
        @Inject(InjectionToken.RABBITMQ_SERVICE) private readonly rabbitMQService: ClientProxy
    ) { }

    async createOrder(dto: CreateOrderDto) {
        this.rabbitMQService.emit(RabbitMqPatterns.ORDER_CREATED, dto);

        return { message: 'Order request sent' };
    }

    async getOrders() {
        return this.rabbitMQService.send({
            cmd: RabbitMqPatterns.FETCH_ORDERS
        }, {}).pipe(timeout(5000));
    }
}