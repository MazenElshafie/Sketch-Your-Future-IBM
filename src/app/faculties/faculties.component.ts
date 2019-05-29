import { Component, OnInit } from '@angular/core';
import { FacultiesService }  from '../services/faculties.service';
import { Response } from '@angular/http';
import { faculty } from '../Models/faculty.model';
import { RouterModule, Routes, Router } from '@angular/router';
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
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css'],
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
