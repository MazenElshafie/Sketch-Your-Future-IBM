import { Component, OnInit } from '@angular/core';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('StudentImg', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-200px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
    trigger('InstructorImg', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(-100px)',
          opacity: 0
        }))
      ])
    ]),

  ]
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router,private sessionService:SessionService) { }
  studentImg:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNVMknkdMawuVp3H59YgTgokmtFCSJ3NmV6ig8XhFr4_-qKgv';
  instructorImg:string='http://gmariegroup.com/wp-content/themes/gmgTheme/images/icon-lds-2-wh.png';
  
  ngOnInit() {
  }
  Student(){
    this.sessionService.setData('role','student');
    this.router.navigate(['/login']);
  }
  Instructor(){
    this.sessionService.setData('role','instructor');
    this.router.navigate(['/login']);
}
}
