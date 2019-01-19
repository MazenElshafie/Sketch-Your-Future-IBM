import { Component, OnInit } from '@angular/core';
import { FacultiesService }  from '../faculties.service';
import { Response } from '@angular/http';
import { faculty } from '../Models/faculty.model';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  constructor(private facultiesService:FacultiesService, private router:Router) { }
  //faculties: faculty[]; 

  ngOnInit() {
    // this.facultiesService.storeFaculties().subscribe(
    //   (response:Response) => { 
    //     console.log(response);
    //   }
    // );
    this.facultiesService.getFaculties();
    // // .subscribe(
    // //   (response:Response) => { 
    // //     const data= response.json();
    // //     this.get(data);}
    // );
}
data:faculty[]= this.facultiesService.faculties;
chooseDepartment(facultyName:string){
    this.router.navigate(['/departments',facultyName]);
  
}
}
