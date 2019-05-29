import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FacultiesComponent } from './faculties/faculties.component'; 
import { HttpModule } from '@angular/http';
import {FacultiesService} from './services/faculties.service';
import {ServerService} from './services/server.service';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsService} from './services/departments.service';
import { AuthService } from './services/auth.service';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './services/courses.service';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule} from 'angularfire2/database'
import { config } from 'src/environments/environment';
import { SessionService} from './services/session.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
const routes:Routes= [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'faculties',component:FacultiesComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'departments/:faculty',component:DepartmentsComponent},
  {path: 'courses',component:CoursesComponent},
  {path: 'courses/:department',component:CoursesComponent},
  {path: 'addCourse/:department',component:AddCourseComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FacultiesComponent,
    DepartmentsComponent,
    CoursesComponent,
    AddCourseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [FacultiesService,ServerService, DepartmentsService,AuthService,CoursesService,SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
