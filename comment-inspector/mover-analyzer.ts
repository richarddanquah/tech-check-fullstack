import { FeedBackAnalyzer } from "../interfaces/feedback-inspector";

export class MoverAnalyzer implements FeedBackAnalyzer{
    inspect(line: string): string | null {
        if(line.includes('Mover')) return 'MOVER_MENTIONS';
    }

}