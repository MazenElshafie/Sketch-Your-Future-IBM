import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router'
import { SessionService} from '../session.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
