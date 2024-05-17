import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './client/components/signup/signup.component';
import { SigninComponent } from './client/components/signin/signin.component';
import { HomeComponent } from './client/components/home/home.component';
import { CoursesComponent } from './client/components/courses/courses.component';
import { CourseslistComponent } from './client/components/courseslist/courseslist.component';
import { CoursedetailsComponent } from './client/components/coursedetails/coursedetails.component';
import { AboutusComponent } from './client/components/aboutus/aboutus.component';
import { OurMissionComponent } from './client/components/our-mission/our-mission.component';
import { OurTeamComponent } from './client/components/our-team/our-team.component';
import { DashboardComponent } from './client/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: '', component: HomeComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'courselist', component: CourseslistComponent},
  { path: 'coursedetails', component: CoursedetailsComponent, title:'details' },
  { path: 'about', component: AboutusComponent, title:'about' },
  { path: 'Mission', component: OurMissionComponent, title:'about' },
  { path: 'team', component: OurTeamComponent, title:'about' },
  { path: 'dashboard', component: DashboardComponent, title:'profile' },








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
