import { Injectable } from '@angular/core';
import { course } from '../Models/course.model';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  MechanicsCourses: course[]=[
    new course(
      'Mechanics',
      'Learns ..',
      'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
    
),
new course(
  'Dynamics',
  'Learns ..',
  'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];

CommunicationCourses: course[]=[
  new course(
    'Mobile',
    'Learns ..',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
  
),
new course(
'4G',
'Learns ..',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];

ComputerEngineeringCourses: course[]=[
  new course(
    'C',
    'Learns ..',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
  
),
new course(
'JAVA',
'Learns ..',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];

OpticsCourses: course[]=[
  new course(
    'Lasic',
    'Learns ..',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
  
),
new course(
'Vision',
'Learns ..',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];

SurgeryCourses: course[]=[
  new course(
    'Surgery 1',
    'Learns ..',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
  
),
new course(
'Surgery 2',
'Learns ..',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];

DentisteryCourses: course[]=[
  new course(
    'Dentistery 1',
    'Learns ..',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
  
),
new course(
'Dentistery 2',
'Learns ..',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];


ComputerScienceCourses: course[]=[
  new course(
    'Algorithms',
    'Learns ..',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
  
),
new course(
'Python',
'Learns ..',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];


StatisticsCourses: course[]=[
  new course(
    'Time Series',
    'Learns ..',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
  
),
new course(
'Regression',
'Learns ..',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];

PhysicsCourses: course[]=[
  new course(
    'Physics 1',
    'Learns ..',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
  
),
new course(
'Physics 2',
'Learns ..',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];

ArchitectureCourses: course[]=[
  new course(
    'Architecture 1',
    'Learns ..',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
  
),
new course(
'Architecture 2',
'Learns ..',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];

DecorCourses: course[]=[
  new course(
    'Decor 1',
    'Learns ..',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'
  
),
new course(
'Decor 2',
'Learns ..',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29349325.jpg'

),
];

  

  
}
