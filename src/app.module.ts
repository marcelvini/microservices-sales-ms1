import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageBrokerModule } from './message-broker/message-broker.module';
import { ConfigModule } from '@nestjs/config';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
	imports: [
		MessageBrokerModule,
		ConfigModule.forRoot({ isGlobal: true }),
		FeedbackModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
