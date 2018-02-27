import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class PollServiceService {

  constructor(private http:Http) { }

}
