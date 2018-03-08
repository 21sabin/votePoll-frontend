import {Routes,RouterModule} from '@angular/router';
import {CreatePollComponent} from './component/create-poll/create-poll.component';
import {VotingPollComponent} from './component/voting-poll/voting-poll.component';
import {voteRoutes} from './component/voting-poll/voting-poll-routes';
import {LoginComponent} from './component/admin/login/login.component';


const routes:Routes=[
    {path:'',redirectTo:"/indexPoll",pathMatch:"full"},
    {path:'indexPoll',component:VotingPollComponent,children:voteRoutes},
    {path:'createPoll',component:CreatePollComponent},
    {path:'adminLogin',component:LoginComponent}
]

export const routing=RouterModule.forRoot(routes);