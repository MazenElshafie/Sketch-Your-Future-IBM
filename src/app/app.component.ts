import { Component, OnInit } from '@angular/core';
import {ServerService} from './services/server.service'
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sketch-Your-Future';
  constructor(private server:ServerService, private afDatabase: AngularFireDatabase){}
 ngOnInit(){
  
}
}
