import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { RabbitMqModule } from '../rabbitmq/rabbitmq.module';

@Module({
    imports: [
        RabbitMqModule,
    ],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule { }
