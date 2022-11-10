import { FeedBackAnalyzer } from "../interfaces/feedback-inspector";

export class SpamInspector implements FeedBackAnalyzer{

    patterns = new RegExp(/(https?:\/\/)/g);

    inspect(line: string): string | null {
        if(this.patterns.test(line)) return 'SPAM'
    }
}