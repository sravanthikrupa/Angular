import { DeveloperService } from '../developers.service';
import { Component, OnInit } from '@angular/core';
import { DeveloperDetails } from '../developer-details';

@Component({
  selector: 'app-all-developers',
  templateUrl: './all-developers.component.html',
  styleUrls: ['./all-developers.component.css']
})
export class AllDevelopersComponent implements OnInit {
  __developerService:DeveloperService;
  unitsInfee:number = 0; 
  

 constructor(ps:DeveloperService) { 
   this.__developerService = ps;
 }

 ngOnInit(): void {
  }

  getAllStudents():DeveloperDetails[]
  {
    return this.__developerService.getAllStudents();
  }

  addfee()
  {
    this.unitsInfee++;
    console.log(this.unitsInfee);
  }

 

}//end Component class
