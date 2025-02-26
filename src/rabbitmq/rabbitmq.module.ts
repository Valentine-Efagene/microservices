import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { InjectionToken, RabbitMqQueue } from '../app.enums';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: InjectionToken.RABBITMQ_SERVICE,
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: RabbitMqQueue.ORDERS,
                    queueOptions: {
                        durable: false
                    }
                }
            }])
    ],
    controllers: [],
    providers: [],
    exports: [ClientsModule]
})
export class RabbitMqModule { }
