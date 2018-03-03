import {Routes,RouterModule} from '@angular/router'
import {VotesComponent} from '../voting-poll/votes/votes.component';



export const voteRoutes:Routes=[
    // {path:"",redirectTo:'/votePoll',pathMatch:"full"},
    {path:'votePoll/:id',component:VotesComponent}
]


// export const voteRouting=RouterModule.forRoot(voteRoutes);