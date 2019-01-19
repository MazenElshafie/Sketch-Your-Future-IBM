import { Component, OnInit } from '@angular/core';
import { DepartmentsService }  from '../departments.service';
import { department } from '../Models/departments.model';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  
   facultyName:string;
   data:department[];
  constructor(private departmentsService:DepartmentsService , private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
   this.facultyName= this.route.snapshot.params['faculty'];
   if (this.facultyName==='Engineering'){
    this.data=this.departmentsService.EngineeringDepartments;
  }
    else if(this.facultyName==='Medicine'){
      this.data=this.departmentsService.MedicineDepartments;
    }
    else if(this.facultyName==='Science'){
      this.data=this.departmentsService.ScienceDepartments;
    }
    else if(this.facultyName==='Fine arts'){
      this.data=this.departmentsService.FineArtsDepartments;
    }
  }
  chooseCourses(departmentName:string){
    this.router.navigate(['/courses',departmentName]);
  
}
  

}
