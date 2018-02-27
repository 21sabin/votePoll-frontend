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

@NgModule({
  declarations: [
    AppComponent,
    VotingPollComponent,
    HeaderComponent,
    CreatePollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }