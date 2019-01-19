import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }
  signinForm:FormGroup;
  email:string;
  password:string;
  ngOnInit() {
    this.signinForm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required]),
    });
    console.log(this.authService.getRole());
  }
  Submit(){
    console.log(this.signinForm.value.email);
    console.log(this.signinForm.value.password);
    this.authService.signin(this.signinForm.value.email,this.signinForm.value.password);
    this.router.navigate(['/faculties']);
  }

}
