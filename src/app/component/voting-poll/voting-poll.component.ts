import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PollServiceService} from './../../service/poll-service.service';
import { PollModel } from '../../model/pollModel';

@Component({
  selector: 'app-voting-poll',
  templateUrl: './voting-poll.component.html',
  styleUrls: ['./voting-poll.component.css']
})
export class VotingPollComponent implements OnInit {

  polls:PollModel[]=[];

  constructor(private router:Router,private pollService:PollServiceService) { }

  createPoll(){
    this.router.navigateByUrl('/createPoll');
  }

  ngOnInit() {
    this.pollService.getPolls()
    .subscribe(
     (poll:PollModel[])=>{
      this.polls=poll;
      console.log("poll list",this.polls)
     }
    )
  }

}
