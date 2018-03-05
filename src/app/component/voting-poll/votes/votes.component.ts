
import { Component, OnInit,Output, EventEmitter,Input} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';
import {PollServiceService} from '../../../service/poll-service.service';
import {VoteModel} from '../../../model/voteModel';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private pollService:PollServiceService) { }

  @Output() displayFlag:EventEmitter<any>=new EventEmitter();
  flag:boolean=true;

  @Input() pollId:any;
  options:Array<any>;
  poll:any;
  op:String;
  totalVote:number=0;



  selectOption(pollId:String,option:any){
    console.log("select optioni",pollId)
    let vote=new VoteModel(pollId,option);
    this.pollService.vote(vote)
    .subscribe(
      vote=>console.log(vote),
      error=>console.error(error)
    );

     this.pollService.votingResult(this.pollId,this.options)
     .subscribe(
       count=>console.log(count)
     );
     
    
  }

  


  indexPoll(){
    console.log("indexpOll")
    this.displayFlag.emit(this.flag);
    this.router.navigateByUrl('/indexPoll')
  }

  ngOnInit() {
   
  }

  getOption(option:any){
    this.op=option
  }

  ngOnChanges(){
      this.pollService.getPollById(this.pollId).subscribe(
        poll=>{
          this.options=poll.options.options;
          this.poll=poll.poll.poll;
        },
        error=>console.error(error)
      );


      this.pollService.voteTotal(this.pollId).subscribe(
        count=>this.totalVote=count.count
      )

     
      
  }

 
 

}
