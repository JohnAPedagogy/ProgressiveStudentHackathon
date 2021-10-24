import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Batch } from 'src/app/models/domain/Batch';
import { Group } from 'src/app/models/domain/Group';
import { LoginRole } from 'src/app/models/domain/LoginRole';
import { Pathway } from 'src/app/models/domain/Pathway';
import { PathwayModule } from 'src/app/models/domain/PathwayModule';
import { PeopleRole } from 'src/app/models/domain/PeopleRole';
import { Person } from 'src/app/models/domain/Person';
import { Progression } from 'src/app/models/domain/Progression';
import { Resource } from 'src/app/models/domain/Resource';
import { Task } from 'src/app/models/domain/Task';
import { TeachingClass } from 'src/app/models/domain/TeachingClass';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent implements OnInit {

  
  constructor() {  }

  ngOnInit(): void {
    
  }

  title : string = "";

  @Output() form = new EventEmitter<boolean>();

  updateForm() {
   this.form.emit();
 }

  @Input()  set currentEntity (value : string){
    switch(value) { 
      case "Person": { 
         this.ObjectElements = Object.keys(new Person());
         break; 
      } 
      case 'Teaching Class': { 
         this.ObjectElements = Object.keys(new TeachingClass());
         break; 
      } 
      case 'Resource': { 
         this.ObjectElements = Object.keys(new Resource());
         break; 
      } 
      case 'People Role': { 
        this.ObjectElements = Object.keys(new PeopleRole());
        break; 
      } 
      case 'Pathways': { 
         this.ObjectElements = Object.keys(new Pathway());
         break; 
      } 
      case 'Group': { 
         this.ObjectElements = Object.keys(new Group());
         break; 
      } 
      case 'Pathway Module': { 
         this.ObjectElements = Object.keys(new PathwayModule());
         break; 
      }
      // case 'Module': { 
      //    this.ObjectElements = Object.keys(new Module());
      //    break; 
      // }
      case 'Login Role': { 
         this.ObjectElements = Object.keys(new LoginRole());
         break; 
      } 
      case 'Task': { 
         this.ObjectElements = Object.keys(new Task());
         break; 
      } 
      case 'Batch': { 
         this.ObjectElements = Object.keys(new Batch());
         break; 
      } 
      case 'Progression': { 
         this.ObjectElements = Object.keys(new Progression());
         break; 
      } 
      default: { 
         this.ObjectElements = Object.keys(new Person());
         break; 
      }     
   } 
   this.title = value;
  };

  public ObjectInstance : any = 0;
  public ObjectElements = Object.keys(this.ObjectInstance)

  checkType(element : any){
    if (typeof(this.ObjectInstance["Name"]) == 'string'){
      return 'text'
    }
    else{
      return 'text'
    }
  }

}
