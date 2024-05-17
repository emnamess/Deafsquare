import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './client/components/header/header.component';
import { FooterComponent } from './client/components/footer/footer.component';
import { SignupComponent } from './client/components/signup/signup.component';
import { SigninComponent } from './client/components/signin/signin.component';
import { HomeComponent } from './client/components/home/home.component';
import { CoursesComponent } from './client/components/courses/courses.component';
import { CourseslistComponent } from './client/components/courseslist/courseslist.component';
import { CoursedetailsComponent } from './client/components/coursedetails/coursedetails.component';
import { AboutusComponent } from './client/components/aboutus/aboutus.component';
import { HeroComponent } from './client/components/hero/hero.component';
import { PreloaderComponent } from './client/components/preloader/preloader.component';
import { OurMissionComponent } from './client/components/our-mission/our-mission.component';
import { OurTeamComponent } from './client/components/our-team/our-team.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './client/components/dashboard/dashboard.component';
import { UserprofileComponent } from './client/components/userprofile/userprofile.component';
import { SidebarComponent } from './client/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    CoursesComponent,
    CourseslistComponent,
    CoursedetailsComponent,
    AboutusComponent,
    HeroComponent,
    PreloaderComponent,
    OurMissionComponent,
    OurTeamComponent,
    DashboardComponent,
    UserprofileComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule

    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
