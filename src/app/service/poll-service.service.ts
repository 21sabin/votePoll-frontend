import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {PollModel} from './../model/pollModel';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import { forEach } from '@angular/router/src/utils/collection';




@Injectable()
export class PollServiceService {

  polls:PollModel[]=[];

  constructor(private http:Http) { }

  addPolls(pollModel:PollModel){
    // const poll=JSON.stringify(pollModel);
    console.log("inside service",pollModel)
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
        console.log("getpolls service",p._id)
        let poll=new PollModel(p.poll,p.options[0].options,p.isAnonymous,p.startDate,p.endDate,p._id);
        transformPoll.push(poll);
      }
      this.polls=transformPoll;
      return transformPoll;
    })
    .catch((err:Response)=>Observable.throw(err.json()))
  }


  getPollById(pollId:any){
    console.log("inside service get poll by id",pollId)
    return this.http.get("http://localhost:3000/api/polls/"+pollId)
    .map((res:Response)=>res.json())
    .catch((error:Response)=>Observable.throw(error.json()))
  }
 
}

