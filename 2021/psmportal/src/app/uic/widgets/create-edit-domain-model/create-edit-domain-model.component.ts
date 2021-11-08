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
import { RepoService } from 'src/app/services/repository/repo.service';
@Component({
  selector: 'app-create-edit-domain-model',
  templateUrl: './create-edit-domain-model.component.html',
  styleUrls: ['./create-edit-domain-model.component.scss']
})
export class CreateEditDomainModelComponent implements OnInit {

  constructor(private domainAdminService:DomainAdminService, private repository:RepoService) {  }

  ngOnInit(): void {
     console.log(this.sGroup['ID'].required)
    
  }

  title : string = "";
  metadata:any;

  @Output() form = new EventEmitter<boolean>();

get sGroup() {
   const mtd=Group.metadata;
   mtd.TaughtTerm.selectmetadata = this.domainAdminService.getNumbers()
   
   this.domainAdminService.getP2pCoaches().then(data => {
      mtd.P2PCoach.selectmetadata = data;
      console.log(mtd.P2PCoach.selectmetadata);
   })
   return mtd;
 }
 get sBatch() {
   const mtd=Batch.metadata;
   return mtd;
 }
 get sModule() {
   const mtd = Module.metadata;
   return mtd;
 }
 get sLoginRole() {
   const mtd = LoginRole.metadata;
   return mtd;
 }
 get sPathway() {
   const mtd = Pathway.metadata;
   return mtd;
 }
 get sPathwayModule() {
   const mtd = PathwayModule.metadata;
   return mtd;
 }
 get sPeopleRole() {
   const mtd = PeopleRole.metadata;
   return mtd;
 }
 get sPerson() {
   const mtd = Person.metadata;
   return mtd;
 }
 get sProgression() {
   const mtd = Progression.metadata;
   return mtd;
 }
 get sResource() {
   const mtd = Resource.metadata;
   return mtd;
 }
 get sTask() {
   const mtd = Task.metadata;
   return mtd;
 }
 get sTeachingClass() {
   const mtd = TeachingClass.metadata;
   return mtd;
 }
 

  updateForm() {
   this.form.emit();
 }

 entity : any;  

  @Input()  set currentEntity (value : string){
     console.log(value)
    switch(value) { 
      case "Person": { 
         this.entity = new Person();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sPerson;
         break; 
      } 
      case 'Teaching Class': { 
         this.entity = new TeachingClass();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sTeachingClass;
         break; 
      } 
      case 'Resource': { 
         this.entity = new Resource();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sResource;
         break; 
      } 
      case 'People Role': { 
         this.entity = new PeopleRole();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sPeopleRole;
         break; 
      } 
      case 'Pathways': { 
         this.entity = new Pathway();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sPathway;
         break; 
      } 
      case 'Group': { 
         this.entity = new Group();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sGroup;
         break; 
      } 
      case 'Pathway Module': { 
         this.entity = new PathwayModule();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sPathwayModule;
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
         this.entity = new Task();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sTask;
         break; 
      } 
      case 'Batch': { 
         this.entity = new Batch();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sBatch;
         break; 
      } 
      case 'Progression': { 
         this.entity = new Progression();
         this.ObjectElements = Object.keys(this.entity);
         this.metadata = this.sProgression;
         break; 
      } 
      default: { 
         break; 
      }     
   } 
   this.title = value;
  };

  public ObjectInstance : any = 0;
  public ObjectElements = Object.keys(this.ObjectInstance)


}
