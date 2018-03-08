import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VotingPollComponent } from './component/voting-poll/voting-poll.component';
import { HeaderComponent } from './component/header/header.component';
import { CreatePollComponent } from './component/create-poll/create-poll.component';
import {routing} from './app.routes';
import {ReactiveFormsModule} from '@angular/forms'
import {PollServiceService} from './service/poll-service.service';
import {VotesComponent} from './component/voting-poll/votes/votes.component';
import { LoginComponent } from './component/admin/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    VotingPollComponent,
    HeaderComponent,
    CreatePollComponent,
    VotesComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [PollServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
