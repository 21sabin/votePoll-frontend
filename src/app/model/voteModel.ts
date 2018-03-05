export class VoteModel{
    constructor(private pollId:String,private option:String,private userId?:any){
        this.pollId=pollId;
        this.option=option;
        this.userId=userId;
    }
}