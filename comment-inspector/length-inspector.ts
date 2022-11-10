import { FeedBackAnalyzer } from "../interfaces/feedback-inspector";

export class LengthAnalyzer implements FeedBackAnalyzer{
    inspect(line: string): string | null {
        if(line.length < 15) return 'SHORTER_THAN_15'
    }
}