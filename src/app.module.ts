import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageBrokerModule } from './message-broker/message-broker.module';
import { ConfigModule } from '@nestjs/config';
import { FeedbackModule } from './feedback/feedback.module';
import { SalesModule } from './sales/sales.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
config();
@Module({
	imports: [
		MessageBrokerModule,
		ConfigModule.forRoot({ isGlobal: true }),
		FeedbackModule,
		SalesModule,
		MongooseModule.forRoot(process.env.MONGO),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
