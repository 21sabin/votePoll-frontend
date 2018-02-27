import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-voting-poll',
  templateUrl: './voting-poll.component.html',
  styleUrls: ['./voting-poll.component.css']
})
export class VotingPollComponent implements OnInit {

  constructor(private router:Router) { }

  createPoll(){
    this.router.navigateByUrl('/createPoll');
  }

  ngOnInit() {
  }

}
