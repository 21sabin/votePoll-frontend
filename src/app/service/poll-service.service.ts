import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {PollModel} from './../model/pollModel';
import {VoteModel} from '../model/voteModel'

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import { forEach } from '@angular/router/src/utils/collection';




@Injectable()
export class PollServiceService {

  polls:PollModel[]=[];

  

  constructor(private http:Http) { }
  

  addPolls(pollModel:PollModel){
    // const poll=JSON.stringify(pollModel);
    let headers=new Headers({'Content-Type':'application/json'})
    return this.http.post("http://localhost:3000/api/polls",pollModel,{headers:headers})
    .map((res:Response)=>res.json())
    .catch((error:Response)=>Observable.throw(error.json()));
  }


  getPolls(){
    return this.http.get("http://localhost:3000/api/polls")
    .map((res:Response)=>{
      const polls=res.json().obj;
     let transformPoll:PollModel[]=[];
      for(let p of polls ){
        let poll=new PollModel(p.poll,p.options[0].options,p.isAnonymous,p.startDate,p.endDate,p._id);
        transformPoll.push(poll);
      }
      this.polls=transformPoll;
      return transformPoll;
    })
    .catch((err:Response)=>Observable.throw(err.json()))
  }


  getPollById(pollId:any){
    return this.http.get("http://localhost:3000/api/polls/"+pollId)
    .map((res:Response)=>res.json())
    .catch((error:Response)=>Observable.throw(error.json()))
  }


  vote(vote:VoteModel){
    console.log(vote,"vote")
    let headers=new Headers({'Content-Type':'application/json'});
    return this.http.post("http://localhost:3000/api/votes",vote,{headers:headers})
    .map((res:Response)=>res.json())
    .catch((err:Response)=>Observable.throw(err.json()))
  }

  voteTotal(pollId:any){
    return this.http.get("http://localhost:3000/api/votes/count/"+pollId)
    .map((res:Response)=>res.json())
    .catch((err:Response)=>Observable.throw(err.json()))
  }

  votingResult(pollId:any){
    console.log("pilld",pollId)
    let headers=new Headers({'Content-Type':'application/json'});
    let url="http://localhost:3000/api/votes/counts/"+pollId;
    // console.log(url,"url")
    return this.http.get(url)
    .map((res:Response)=>res.json())
    .catch((err:Response)=>Observable.throw(err.json()))
    
  }


}

