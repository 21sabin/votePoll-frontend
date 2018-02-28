

export class PollModel {

   
   
    constructor(private poll: String,
         private options: String[],
        private isAnonymous:String,private startDate:Date,private endDate:Date) {
        this.poll = poll;
        this.options = this.options;
        this.isAnonymous=isAnonymous;
        this.startDate=startDate;
        this.endDate=endDate;
    }
}