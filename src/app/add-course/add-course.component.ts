import { Component, OnInit } from '@angular/core';
import { course } from '../Models/course.model';
import { CoursesService }  from '../services/courses.service';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router'
import { SessionService} from '../services/session.service';
import { NgForm,FormGroup,FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  departmentName:string;
  obj:string;
  course:course;
  addCourseForm:FormGroup;
  constructor(private route:ActivatedRoute , private coursesService:CoursesService,private router:Router,private afDatabase: AngularFireDatabase) { }
 
  
  ngOnInit() {
    this.addCourseForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'description':new FormControl(null,Validators.required),
      'imagePath':new FormControl(null,Validators.required),   
    });
    this.departmentName= this.route.snapshot.params['department'];
  }
  Submit(){
    // this.course[`${this.departmentName}`]={name:this.addCourseForm.value.name,description:this.addCourseForm.value.description,imagePath:this.addCourseForm.value.imagePath};
    //this.afDatabase.database.ref('courses').update(this.course);
    this.course= new course(this.addCourseForm.value.name,this.addCourseForm.value.description,this.addCourseForm.value.imagePath);
    if(this.departmentName==='Mechanics'){
      this.coursesService.MechanicsCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }
    else if(this.departmentName==='Communication'){
      this.coursesService.CommunicationCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }
    else if(this.departmentName==='Computer Engineering'){
      this.coursesService.ComputerEngineeringCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }
    else if(this.departmentName==='Optics'){
      this.coursesService.OpticsCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }
    else if(this.departmentName==='Surgery'){
      this.coursesService.SurgeryCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }
    else if(this.departmentName==='Dentistery'){
      this.coursesService.DentisteryCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }
    else if(this.departmentName==='Computer Science'){
      this.coursesService.ComputerScienceCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }
    else if(this.departmentName==='Statistics'){
      this.coursesService.StatisticsCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }
    else if(this.departmentName==='Physics'){
      this.coursesService.PhysicsCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }
    else if(this.departmentName==='Architecture'){
      this.coursesService.ArchitectureCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }
    else if(this.departmentName==='Decor'){
      this.coursesService.DecorCourses.push(this.course);
      this.router.navigate(['/courses',this.departmentName]); 
    }

  }

}
