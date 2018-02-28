import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PollModel } from '../../model/pollModel';
import { Router } from '@angular/router';
import { PollServiceService } from '../../service/poll-service.service';



@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  constructor(private router: Router, private pollService: PollServiceService) { }
  addChoice: boolean = false;
  countOption = 2;
  count = [1, 2];
  addChoiceError: String = "";
  setDisable: boolean = true;
  

  form: FormGroup;

  pollMessage:String=""

  


  ngOnInit() {
    this.form = new FormGroup({
      question: new FormControl(null, Validators.required),
      choice0: new FormControl(null, Validators.required),
      choice1: new FormControl(null, Validators.required),
      choice2: new FormControl(null),
      choice3: new FormControl(null),
      choice4: new FormControl(null),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      isAnonymous: new FormControl(null, Validators.required)
    })

    console.log("poll message",this.pollMessage)

    
  }


  addOption() {
    this.countOption++;
    this.count.push(this.countOption);
   
  }

  createPoll() {
   let options = [];
    for (let i = 0; i < this.count.length; i++) {
      // console.log("options",this.form.get('choice'+i).value);
     options.push(this.form.get('choice' + i).value)
    }
    let poll = new PollModel(this.form.value.question, options);
    this.pollService.addPolls(poll)
    .subscribe(()=>
      poll=>alert("Poll added sucessfully"),
      error=>console.error(error)
    )
  }


  indexPoll() {
    this.router.navigateByUrl('/indexPoll');
  }

}
