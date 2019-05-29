import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SessionService} from '../services/session.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private sessionService:SessionService) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['']);
    this.sessionService.cleanAll();
  }

}
