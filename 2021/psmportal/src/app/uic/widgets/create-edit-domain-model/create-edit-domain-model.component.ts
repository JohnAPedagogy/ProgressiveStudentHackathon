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
  selector: 'app-create-edit-domain-model',
  templateUrl: './create-edit-domain-model.component.html',
  styleUrls: ['./create-edit-domain-model.component.scss']
})
export class CreateEditDomainModelComponent implements OnInit {


  
  constructor() {  }

  ngOnInit(): void {
     console.log(this.sGroup['ID'].required)
    
  }

  title : string = "";
  metadata:any;

  @Output() form = new EventEmitter<boolean>();

  get sGroup() {
   const mtd=Group.metadata;
   //mtd.p2Pcoach.selectmetatda =service.getp2pcoeaches()
   return mtd;

 }
 get sPeopleRole() {
  const mtd=PeopleRole.metadata;
  //mtd.p2Pcoach.selectmetatda =service.getp2pcoeaches()
  return mtd;

}
 get sBatch() {
   return {};//Batch.metadata;
 }
 get LoginRole() {
   return {};//Batch.metadata;
 }
 get Pathway() {
   return {};//Batch.metadata;
 }
//  import { PathwayModule } from 'src/app/models/domain/PathwayModule';
//  import { PeopleRole } from 'src/app/models/domain/PeopleRole';
//  import { Person } from 'src/app/models/domain/Person';
//  import { Progression } from 'src/app/models/domain/Progression';
//  import { Resource } from 'src/app/models/domain/Resource';
//  import { Task } from 'src/app/models/domain/Task';
//  import { TeachingClass } from 'src/app/models/domain/TeachingClass';
 

  updateForm() {
   this.form.emit();
 }

 entity : any;  

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
         this.entity = new PeopleRole();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sPeopleRole;
         break; 
      } 
      case 'Pathways': { 
         this.ObjectElements = Object.keys(new Pathway());
         break; 
      } 
      case 'Group': { 
         this.entity = new Group();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sGroup;
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


}
