import {Routes,RouterModule} from '@angular/router';
import {CreatePollComponent} from './component/create-poll/create-poll.component';
import {VotingPollComponent} from './component/voting-poll/voting-poll.component';
import {voteRoutes} from './component/voting-poll/voting-poll-routes';

const routes:Routes=[
    {path:'',redirectTo:"/indexPoll",pathMatch:"full"},
    {path:'indexPoll',component:VotingPollComponent,children:voteRoutes},
    {path:'createPoll',component:CreatePollComponent}
]

export const routing=RouterModule.forRoot(routes);