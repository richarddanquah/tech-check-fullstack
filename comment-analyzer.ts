import * as readline from 'node:readline';
import { FeedBackAnalyzer} from './interfaces/feedback-inspector';

export class CommentAnalyzer{

    public constructor(private file: Buffer) { }

    public  async analyze(feedBackInspectors: FeedBackAnalyzer[] ){
        let resultsMap: Record<string, number> = {}
        var comments = this.file.toString().split(/\r?\n/)
        for (const comment of comments){
            for (const feedBackInspector of feedBackInspectors){
                var key = feedBackInspector.inspect(comment);
                if( key !== undefined) this.incOccurrence(resultsMap,key)
            }
        }
        return resultsMap;
    }
    private incOccurrence(countMap: Record<string, number> ,key: string): void{
        var keyValue = countMap[key]
        if(  keyValue === undefined) countMap[key]= 0;
        countMap[key] += 1
    }
}