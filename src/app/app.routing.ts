import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home/home-screen.component';
import { SigninScreenComponent } from './auth/singin/signin-screen.component';
import { SignupScreenComponent } from './auth/signup/signup-screen-component';
import { QUESTION_ROUTES} from './questions/question.routing';

const APP_ROUTES: Routes = [
    { path: '', component: HomeScreenComponent, pathMatch: 'full'},
    { path: 'signin', component: SigninScreenComponent},
    { path: 'signup', component: SignupScreenComponent},
    { path: 'questions', children: QUESTION_ROUTES}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
