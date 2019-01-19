import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { SessionService} from './session.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role:string ='non';
   signup(email:string,password:string){
   firebase.auth().createUserWithEmailAndPassword(email,password)
      .then( response => this.sessionService.setData('id',<string>response.user.uid))
      .catch( error => console.log("Error fl signUP") )
   }
   signin(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(response => console.log(response.user.uid))
    .catch(error => console.log(error));
    //this.afDatabase.database.ref('users/instructor').set({'response.user.uid':{}});
    }
  setRole(Role:string){
    if(Role=="student"){this.role="student"}
    else if(Role=="instructor"){this.role="instructor"}
  }  
  getRole(){
    return this.role;
  }
  
  constructor(private afDatabase: AngularFireDatabase,private sessionService:SessionService) { }
}
