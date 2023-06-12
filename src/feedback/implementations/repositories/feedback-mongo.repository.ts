import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LeanDocument } from 'mongoose';
import { Feedback } from 'src/feedback/entities/feedback.entity';
import { FeedbackDocument, FeedbackModel } from '../schemas/feedback.schema';
import { CreateFeedbackDto } from 'src/feedback/dto/CreateFeedbackDto';
import { FeedbackRepository } from 'src/feedback/interfaces/feedback.repository';

@Injectable()
export class FeedbackMongoRepository implements FeedbackRepository {
	constructor(
		@InjectModel(Feedback.name) private feedbackModel: FeedbackModel,
	) {}

	async findAll() {
		const feedbacks = await this.feedbackModel.find().lean();
		return feedbacks.map((feedback) => this.mapToFeedback(feedback));
	}

	async createFeedback(
		createFeedbackDto: CreateFeedbackDto,
	): Promise<Feedback> {
		const feedbackCreated = await new this.feedbackModel(
			createFeedbackDto,
		).save();

		return this.mapToFeedback(feedbackCreated);
	}

	private mapToFeedback(
		rawFeedback: LeanDocument<FeedbackDocument>,
	): Feedback {
		const feedback = new Feedback();

		feedback.id = rawFeedback.id;
		feedback.message = rawFeedback.message;
		feedback.origin = rawFeedback.origin;
		feedback.createdAt = rawFeedback.createdAt || new Date();
		feedback.updatedAt = rawFeedback.updatedAt || new Date();

		return feedback;
	}
}
