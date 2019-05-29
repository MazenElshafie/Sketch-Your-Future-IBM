import { Component, OnInit } from '@angular/core';
import { CoursesService }  from '../services/courses.service';
import { course } from '../Models/course.model';
import { ActivatedRoute} from '@angular/router';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router'
import { SessionService} from '../services/session.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [
    trigger('left', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),]
})
export class CoursesComponent implements OnInit {

  departmentName:string;
   data:course[];
  constructor(private route:ActivatedRoute , private coursesService:CoursesService,private authService:AuthService,private router:Router, private sessionService:SessionService) { }
   role:boolean;

   
  ngOnInit() {
    
    if (this.sessionService.getData('role') == "instructor") {
      console.log("instructor can add course");
       this.role=true;
    }
    else if(this.sessionService.getData('role') == 'student'){
      console.log("student can join courses");
      this.role=false;
    }
    this.departmentName= this.route.snapshot.params['department'];
    console.log(this.departmentName);
    console.log(this.authService.getRole());
   if (this.departmentName==='Mechanics'){
    this.data=this.coursesService.MechanicsCourses;    
  }
  else if (this.departmentName==='Computer Engineering'){
    this.data=this.coursesService.ComputerEngineeringCourses;    
  }
  else if (this.departmentName==='Surgery'){
    this.data=this.coursesService.SurgeryCourses;    
  }
  else if (this.departmentName==='Communication'){
    this.data=this.coursesService.CommunicationCourses;    
  }
  else if (this.departmentName==='Dentistery'){
    this.data=this.coursesService.DentisteryCourses;    
  }
  else if (this.departmentName==='Optics'){
    this.data=this.coursesService.OpticsCourses;    
  }
  else if (this.departmentName==='Computer Science'){
    this.data=this.coursesService.ComputerScienceCourses;    
  }
  else if (this.departmentName==='Statistics'){
    this.data=this.coursesService.StatisticsCourses;    
  }
  else if (this.departmentName==='Physics'){
    this.data=this.coursesService.PhysicsCourses;    
  }
  else if (this.departmentName==='Architecture'){
    this.data=this.coursesService.ArchitectureCourses;    
  }
  else if (this.departmentName==='Decor'){
    this.data=this.coursesService.DecorCourses;    
  }
   }
   addCourse(){
    this.router.navigate(['/addCourse',this.departmentName]);
   }
}
