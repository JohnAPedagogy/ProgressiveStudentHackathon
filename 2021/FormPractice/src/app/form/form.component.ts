import { Student } from 'src/Models/student';
import { Teacher } from 'src/Models/teacher';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
    console.log(this.FormObject)
    switch(this.FormObject) { 
      case 'Student': { 
         this.ObjectInstance = new Student();
         break; 
      } 
      case 'Teacher': { 
         this.ObjectInstance = new Teacher();
         break; 
      } 
      default: { 
         
         break; 
      } 
   } 
    this.ObjectElements = Object.keys(this.ObjectInstance)
  }

  public ObjectInstance : any = 0;
  public ObjectElements = Object.keys(this.ObjectInstance)
  @Input() FormObject = '';  

  checkType(element : any){
    if (typeof(this.ObjectInstance["Name"]) == 'string'){
      return 'text'
    }
    else{
      return 'text'
    }
  }
}
