import { FeedBackAnalyzer} from "../interfaces/feedback-inspector";

export class ShakerAnalyzer implements FeedBackAnalyzer{
    inspect(line: string): string | null {
        if(line.includes('Shaker')) return 'SHAKER_MENTIONS';
    }
}