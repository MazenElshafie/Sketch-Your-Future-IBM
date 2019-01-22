import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import {  Router } from '@angular/router';
import { SessionService} from '../session.service';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router,private sessionService:SessionService,
    private afDatabase: AngularFireDatabase) { }
  signinForm:FormGroup;
  email:string;
  password:string;
  userID:string;
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
    //this.authService.signin(this.signinForm.value.email,this.signinForm.value.password);
    firebase.auth().signInWithEmailAndPassword(this.signinForm.value.email,this.signinForm.value.password)
    .then(response =>{ 
              this.userID=response.user.uid;
              this.sessionService.setData('id',this.userID);
              console.log(response);
              
              if(this.sessionService.getData('role')==='instructor'){
              this.afDatabase.database.ref('users/instructor').once("value").then(response => 
                {
                  if(!response.hasChild(this.userID)){
                    
                    this.router.navigate(['']);
                    alert('You are not an instructor!');
                   }
                   else {this.router.navigate(['/faculties']); }
                }
              );
               }
              
              if(this.sessionService.getData('role')==='student'){
                      this.afDatabase.database.ref('users/student').once("value").then(response => 
                          {
                                if(!response.hasChild(this.userID)){
                                  
                                  this.router.navigate(['']);
                                  alert('You are not a student!');
                                 }
                                 else {this.router.navigate(['/faculties']);          }
                          }
                            );
                }
                
              //this.sessionService.setData('id',<string>response.user.uid);
                        })
    .catch(error => {alert("wrong email or password , please try again!");
                      this.router.navigate(['/login']);
                       });

                                   
    //this.afData
    // if(!this.authService.Error){this.router.navigate(['/faculties']);}
    
    
  }

}
