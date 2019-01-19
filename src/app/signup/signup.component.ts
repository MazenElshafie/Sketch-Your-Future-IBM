import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import {  Router } from '@angular/router';
import { SessionService} from '../session.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  email:string;
  password:string;
  constructor(private authService: AuthService, private afDatabase: AngularFireDatabase,private router:Router,private sessionService:SessionService) { }
  uid:any;
  ngOnInit() {
    this.signupForm=new FormGroup({
      'firstName':new FormControl(null,Validators.required),
      'lastName':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required]),
    });
  }
Submit(){
  this.authService.signup(this.signupForm.value.email,this.signupForm.value.password);
  // firebase.auth().createUserWithEmailAndPassword(this.signupForm.value.email,this.signupForm.value.firstName);
  //`faculties/${id}`
  this.afDatabase.database.ref('faculties').once('value').then(snapshot=>{
     console.log(snapshot.val());
     this.router.navigate(['/faculties']);
  });
 this.uid=this.sessionService.getData('id');
  this.afDatabase.database.ref('users/instructor').push({'3' :{firstNAme:this.signupForm.value.firstName,
    lastName:this.signupForm.value.lastName,
    email:this.signupForm.value.email,
    password:this.signupForm.value.password}});
}
}
