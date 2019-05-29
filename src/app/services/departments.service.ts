import { Injectable } from '@angular/core';
import { department } from '../Models/departments.model';
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }
    EngineeringDepartments: department[] = [
     new department(
       'Computer Engineering',
       'Learns you programming and problem solving..',
       'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
     
 ), new department(
   'Communication',
   'Learns you telecommunications..',
   'http://www.manalsoftech.com/image/ec.png'
   
  
 ),
 new department(
   'Mechanics',
   'Learns you car mechanics..',
   'https://image.shutterstock.com/image-vector/mechanical-engineer-illustration-male-silhouette-450w-752969746.jpg'
   
  
 ), 
   ];

    MedicineDepartments: department[] = [
    new department(
      'Dentistery',
      'Learns you how to think..',
      'https://static.wixstatic.com/media/c79ce7_e64f0282cd9544aa97126a91a21d8d83.gif'
    
), new department(
  'Optics',
  'Learns you how to think..',
  'https://www.mecnj.com/wp-content/uploads/2012/11/optics.jpg'
  
 
),
new department(
  'Surgery',
  'Learns you how to think..',
  'https://image.shutterstock.com/image-vector/surgery-flat-icon-high-quality-260nw-546752128.jpg'
  
 
), 
  ];

  ScienceDepartments: department[] = [
    new department(
      'Computer Science',
      'Learns you programming and data science..',
      'https://wallpaperplay.com/walls/full/b/f/7/28171.jpg'
    
), new department(
  'Statistics',
  'Learns you how to make statistics..',
  'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/business-statistics-intro-ae713__F0000.png'
  
 
),
new department(
  'Physics',
  'Learns you all life physics..',
  'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX28352946.jpg'
  
 
), 
  ];

  FineArtsDepartments: department[] = [
    new department(
      'Architecture',
      'Learns you how to design buildings..',
      'https://sg.fiverrcdn.com/photo3s/106401951/original/9c19c2321df73dce3c80025080213c3b88d9d7b4.jpg?1515482747'
    
), new department(
  'Decor',
  'Learns you how to make buildings more beautiful..',
  'https://www.brandcrowd.com/gallery/brands/pictures/picture12579684029054.png'
  
 
),

  ];


}
