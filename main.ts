import { readdir } from 'node:fs/promises';
import * as fs from 'node:fs';
import * as path from 'node:path';

import { MoverAnalyzer } from './comment-inspector/mover-analyzer';
import { ShakerAnalyzer } from './comment-inspector/shaker-inspector';
import { LengthAnalyzer } from './comment-inspector/length-inspector';
import { CommentAnalyzer } from './comment-analyzer';
import { FeedBackAnalyzer} from './interfaces/feedback-inspector';
import { QuestionsAnalyzer } from './comment-inspector/questions-inspector';
import { SpamInspector } from './comment-inspector/spam-inspector';


export class Review{

    private feedback: FeedBackAnalyzer[] = []

     public constructor() {
       this.feedback.push(new LengthAnalyzer())
       this.feedback.push(new ShakerAnalyzer())
       this.feedback.push(new MoverAnalyzer)
       this.feedback.push(new QuestionsAnalyzer())
       this.feedback.push(new SpamInspector())
     }

      public async main(){
   
        try {
            let filenames = await readdir('docs');
            filenames = filenames.filter((file: string) => {
                return file.endsWith('.txt')
            })
            for (const filename of filenames){
              let totalResults: Record<string, number> = {}
               fs.readFile(path.join(__dirname,'docs',filename), async  (err, file) => {
                if (err) throw err;
               var commentAnalyzer = new CommentAnalyzer(file);
               var fileResults  = await commentAnalyzer.analyze(this.feedback);
               this.addReportResults(fileResults,totalResults);
               console.log('RESULTS\n=======');
               Object.entries(totalResults).forEach(([key, value]) => console.log(key + " : " + value));
            })
            }
           
            
         
          } catch (err) {
            console.error(err);
          }
    }

    private addReportResults(source: Record<string, number>,target: Record<string, number> ): void{
      Object.entries(source).forEach(([key, value]) => target[key] = value);
    }
}

let review = new Review();
  review.main()

