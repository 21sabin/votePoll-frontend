
import { Component, OnInit,Output, EventEmitter,Input} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';
import {PollServiceService} from '../../../service/poll-service.service';

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



  selectOption(options:any){
    console.log(options,"options")
  }

  


  indexPoll(){
    console.log("indexpOll")
    this.displayFlag.emit(this.flag);
    this.router.navigateByUrl('/indexPoll')
  }

  ngOnInit() {
      // console.log("polls",this.polls)
  }

  ngOnChanges(){
      this.pollService.getPollById(this.pollId).subscribe(
        poll=>{
          this.options=poll.options.options;
          this.poll=poll.poll.poll;
          console.log("poll",this.options);
          console.log("poll",this.poll)
        },
        error=>console.error(error)
      )
  }

}
