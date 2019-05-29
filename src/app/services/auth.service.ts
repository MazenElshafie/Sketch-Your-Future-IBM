import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { SessionService} from './session.service';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role:string ='non';
  userID:string;
   signup(email:string,password:string){
   firebase.auth().createUserWithEmailAndPassword(email,password)
      .then( response => {this.sessionService.setData('id',response.user.uid)
                           console.log("auth id  " + response.user.uid);       
                          })
      .catch( error => console.log("Error while signUP") )
   }

   signin(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(response =>{ 
              this.userID=response.user.uid;
              this.sessionService.setData('id',this.userID);
              console.log(response);
              this.router.navigate(['/faculties']);
              this.afDatabase.database.ref('users/instructor').once("value").then(response => 
                console.log(response.hasChild(this.userID))
              );
              //this.sessionService.setData('id',<string>response.user.uid);
                        })
    .catch(error => this.signInError());
    //this.afDatabase.database.ref('users/instructor').set({'response.user.uid':{}});
    }

    signInError(){
      alert("wrong email or password , please try again!");
     this.router.navigate(['/login']);
    }
  setRole(Role:string){
    if(Role=="student"){this.role="student"}
    else if(Role=="instructor"){this.role="instructor"}
  }  
  getRole(){
    return this.role;
  }
  
  constructor(private afDatabase: AngularFireDatabase,private sessionService:SessionService, private router:Router) { }
}
