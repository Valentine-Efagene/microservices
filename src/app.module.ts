import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMqModule } from './rabbitmq/rabbitmq.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    RabbitMqModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
