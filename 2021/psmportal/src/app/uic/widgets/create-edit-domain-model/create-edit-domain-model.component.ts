import { DomainAdminService } from './../../../services/sadmin/domain-admin.service';
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
import { Module } from 'src/app/models/domain/Module';
@Component({
  selector: 'app-create-edit-domain-model',
  templateUrl: './create-edit-domain-model.component.html',
  styleUrls: ['./create-edit-domain-model.component.scss']
})
export class CreateEditDomainModelComponent implements OnInit {

  constructor(private domainAdminService:DomainAdminService) {  }

  ngOnInit(): void {
     console.log(this.sGroup['ID'].required)
    
  }

  title : string = "";
  metadata:any;

  @Output() form = new EventEmitter<boolean>();

  get sGroup() {
   const mtd=Group.metadata;
   mtd.TaughtTerm.selectmetadata = this.domainAdminService.getNumbers()
   mtd.P2PCoach.selectmetadata = this.domainAdminService.getP2pCoaches()
   return mtd;
 }
 get sPeopleRole() {
  const mtd=PeopleRole.metadata;
  
  //mtd.p2Pcoach.selectmetatda = service.getp2pcoeaches()
  return mtd;

}
 get sBatch() {
   const mtd=Batch.metadata;
   return mtd;
 }
 get sModule() {
   const mtd = Module.metadata;
   console.log(mtd)
   return mtd;
 }
 get sLoginRole() {
   const mtd = LoginRole.metadata;
   return mtd;
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
     console.log(value)
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
      case 'Module': { 
         this.entity = new Module();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sModule;
         break; 
      }
      case 'Login Role': { 
         this.entity = new LoginRole();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sLoginRole;
         break; 
      } 
      case 'Task': { 
         this.ObjectElements = Object.keys(new Task());
         break; 
      } 
      case 'Batch': { 
         this.entity = new Batch();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sBatch;
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
