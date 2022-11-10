import { FeedBackAnalyzer } from "../interfaces/feedback-inspector";

export class QuestionsAnalyzer implements FeedBackAnalyzer{
    patterns = new RegExp(/([?])/g);
    inspect(line: string): string | null {
        if(this.patterns.test(line)) return 'QUESTIONS'
    }
}