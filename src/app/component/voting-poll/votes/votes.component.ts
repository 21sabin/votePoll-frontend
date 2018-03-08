
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { PollServiceService } from '../../../service/poll-service.service';
import { VoteModel } from '../../../model/voteModel';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private pollService: PollServiceService) { }

  @Output() displayFlag: EventEmitter<any> = new EventEmitter();
  flag: boolean = true;

  @Input() pollId: any;
  options: Array<any>;
  poll: any;
  op: String;
  totalVote: number = 0;

  chart=[];


  chartOptions=[];
  chartCounts=[];
  showChart=false;

 




  selectOption(pollId: String, option: any) {
    console.log("select optioni", pollId)
    let vote = new VoteModel(pollId, option);
    this.pollService.vote(vote)
      .subscribe(
        vote => {
          console.log(vote);
          this.totalVote = this.totalVote + 1;
        },
        error => console.error(error),
    );

  }




  indexPoll() {
    console.log("indexpOll")
    this.displayFlag.emit(this.flag);
    this.router.navigateByUrl('/indexPoll')
  }

  ngOnInit() {
    console.log(this.chartCounts,"chartcounts")
    this.pollService.getPollById(this.pollId).subscribe(
      poll => {
        this.options = poll.options.options;
        this.poll = poll.poll.poll;
      },
      error => console.error(error)

    );

    this.pollService.votingResult(this.pollId)
      .subscribe(
       // count => console.log(count.count)
        res=>{
          let _id=res['count'].map(res=>res._id);
          console.log("option",_id);
          let counts=res['count'].map(res=>res.count)
          console.log("count",counts)

            for(let id of _id){
              this.chartOptions.push(id)
              console.log("chartoptions",this.chartOptions)
            }

            for(let count of counts){
             this.chartCounts.push(count)
            }

            this.showChart=true;
            
        }
      );

      // let votes=['option1','option2','options3'];
      console.log("chartshow",this.chart)

      var ctx=document.getElementById("myChart");

      this.chart=new Chart(ctx,{
        type:'bar',
        data:{
          labels:this.chartOptions,
          datasets:[
            {
              data:this.chartCounts,
              borderColor:'#3cba9f',
              fill:false
            }
          ]

        },
        options:{
          legend:{
            display:true
          },
          scales:{
            xAxes:[{
              display:true
            }],
            yAxes:[{
              ticks: {
                steps : 10,
                stepValue : 0,
                max : 100,
                autoSkip: false
              },
              display:true
            }]
          }
        }
      })
     
     
      
  }

  getOption(option: any) {
    this.op = option
  }

  ngOnChanges() {
    this.pollService.voteTotal(this.pollId).subscribe(
      count => this.totalVote = count.count,

    )
  }




}
