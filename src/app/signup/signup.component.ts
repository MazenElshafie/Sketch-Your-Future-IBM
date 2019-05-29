import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import {  Router } from '@angular/router';
import { SessionService} from '../services/session.service';
import { faculty } from '../Models/faculty.model';
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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
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
    ]),
    trigger('right', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(100px)'
        }),
        animate(300)
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
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  email:string;
  password:string;
  constructor(private authService: AuthService, private afDatabase: AngularFireDatabase,private router:Router,private sessionService:SessionService) { }
  uid:any;
  user={};
  f:any;
  ngOnInit() {
    this.signupForm=new FormGroup({
      'firstName':new FormControl(null,Validators.required),
      'lastName':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required]),
    });
    this.afDatabase.database.ref('faculties').once('value').then(snapshot=>{
      
      snapshot.forEach(element => {
        this.f=element.toJSON();
        console.log(this.f.name);
      });
       //console.log(this.f);
    });
  }
Submit(){
  //this.authService.signup(this.signupForm.value.email,this.signupForm.value.password);

  // firebase.auth().createUserWithEmailAndPassword(this.signupForm.value.email,this.signupForm.value.firstName);
  //`faculties/${id}`
  
  
  firebase.auth().createUserWithEmailAndPassword(this.signupForm.value.email,this.signupForm.value.password)
      .then( response => {this.sessionService.setData('id',response.user.uid)
                           console.log("authhhhhhhh id  " + response.user.uid);   
                           console.log(this.sessionService.getData('role'));
 this.uid=this.sessionService.getData('id');
 console.log("signupppppppp id    "+ this.uid);

 if(this.sessionService.getData('role')=='student'){
  this.user[`${this.uid}`]={firstNAme:this.signupForm.value.firstName,
    lastName:this.signupForm.value.lastName,
    email:this.signupForm.value.email,
    password:this.signupForm.value.password};
    this.afDatabase.database.ref('users/student').update(this.user);
 }
 else if(this.sessionService.getData('role')=='instructor'){
  this.user[`${this.uid}`]={firstNAme:this.signupForm.value.firstName,
    lastName:this.signupForm.value.lastName,
    email:this.signupForm.value.email,
    password:this.signupForm.value.password};
    this.afDatabase.database.ref('users/instructor').update(this.user);
 }
  
 this.router.navigate(['/faculties']);
                          })
      .catch( error => console.log("Error fl signUP") )

 
  // this.afDatabase.database.ref('users/instructor').update({'3' :{firstNAme:this.signupForm.value.firstName,
  //   lastName:this.signupForm.value.lastName,
  //   email:this.signupForm.value.email,
  //   password:this.signupForm.value.password}});
  
}
}
