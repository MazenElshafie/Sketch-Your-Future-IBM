import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { faculty } from '../Models/faculty.model';
import { Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class FacultiesService {
   faculties: faculty[] = [
    new faculty(
      'Engineering',
      'Engineers work in a variety of fields to analyze, develop and evaluate large-scale, complex systems..',
      'https://cdn4.vectorstock.com/i/1000x1000/17/88/engineering-logo-icon-design-vector-15611788.jpg',
      ['Computer','Communication','Mechanics']
     
), new faculty(
  'Medicine',
  'Medicine is the field of health and healing. It includes nurses, doctors, and various specialists..',
  'https://us.123rf.com/450wm/logos2012/logos20121508/logos2012150800024/43549619-stock-vector-m-letter-medicine-logo-template-on-white-background-isolated-2d-flat-vector.jpg?ver=6',
  ['Computer','Communication','Mechanics']
 
),
new faculty(
  'Science',
  'science. a branch of knowledge or study dealing with a body of facts or truths systematically arranged and showing the operation of general laws..',
  'https://cdn.worldvectorlogo.com/logos/science-colleges.svg',
  ['Computer','Communication','Mechanics']
 
), new faculty(
  'Fine arts',
  'Historically, the five main fine arts were painting, sculpture, architecture, music, and poetry, with performing arts including theatre and dance..',
  'https://static1.squarespace.com/static/530e9312e4b013842a36a282/t/5a94eb98c83025ae9ba01df1/1538099403664/FineArts-logo-color.jpg',
  ['Computer','Communication','Mechanics']
 
),  
  ];
  constructor(private http:Http) {}
    storeFaculties(){ 
      return this.http.put('https://sketch-your-future-ibm.firebaseio.com/faculties.json',this.faculties);
                }
    getFaculties(){
      return this.http.get('https://sketch-your-future-ibm.firebaseio.com/faculties.json').subscribe((response: Response ) => {
        this.faculties=response.json();
       }
      );
      // return this.http.get('https://sketch-your-future-ibm.firebaseio.com/faculties.json');
    }           
   
}
