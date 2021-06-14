import { DeveloperDetails } from './developer-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DeveloperService {


  constructor() { }
  
  // include code to hit springboot endpoints {}
  getAllStudents(): DeveloperDetails[]
  {
    let developer1 : DeveloperDetails = {  
        DevName : 'john',
        DevId  : 1,
        Accuracy:7,
        SkillLevel:'A',
        Email:'eleven@gmail.com',
        mobile: '9988776655'
        
    }
    let developer2 : DeveloperDetails = {  
        DevName : 'abc',
        DevId  : 1,
        Accuracy:7,
        SkillLevel:'A',
        Email:'eleven@gmail.com',
        mobile: '9988776655'
        
    }

    
    return [developer1,developer2];
  }//end of getAll Products from Server

}//end of service class