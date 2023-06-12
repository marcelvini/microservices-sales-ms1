import { CreateFeedbackDto } from '../dto/CreateFeedbackDto';
import { Feedback } from '../entities/feedback.entity';

export const FEEDBACK_REPOSITORY = 'FeedbackRepository';

export interface FeedbackRepository {
	findAll(): Promise<Feedback[]>;
	createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback>;
}
