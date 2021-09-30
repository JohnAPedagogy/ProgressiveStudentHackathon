import { PeopleRole } from './../../../models/domain/PeopleRole';
import { TeachingClass } from './../../../models/domain/TeachingClass';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/domain/Person';
import { Resource } from 'src/app/models/domain/Resource';
import { RepoService } from 'src/app/services/repository/repo.service';
import { Pathway } from 'src/app/models/domain/Pathway';
import { Group } from 'src/app/models/domain/Group';
import { PathwayModule } from 'src/app/models/domain/PathwayModule';
import { Module } from 'src/app/models/domain/Module';
import { LoginRole } from 'src/app/models/domain/LoginRole';
import { Batch } from 'src/app/models/domain/Batch';
import { Progression } from 'src/app/models/domain/Progression';
import { Task } from 'src/app/models/domain/Task';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor(private repository:RepoService) { }

  //Instance the dataSource variable, which stores all the information displayed on the table
  dataSource : any;

  //OnInit we get all the data from the correct context and put it on the dataSource variable
  ngOnInit(): void {
   this.repository.TeachingClassContext.getAll().then((data:TeachingClass[])=>this.dataSource = data);
   this.displayedColumns = Object.keys(new TeachingClass());
    
  }
  
  //The collums are the attributes of the respective entity 
  displayedColumns: string[] = []


  title : string = "";


  @Input()  set currentEntity (value : string){
    if(this.dataSource != null) console.log(this.dataSource)
    switch(value) { 
      case "Person": { 
         this.repository.PersonContext.getAll().then((data:Person[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new Person());
         break; 
      } 
      case 'Teaching Class': { 
         this.repository.TeachingClassContext.getAll().then((data:TeachingClass[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new TeachingClass());
         break; 
      } 
      case 'Resource': { 
         this.repository.ResourceContext.getAll().then((data:Resource[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new Resource());
         break; 
      } 
      case 'People Role': { 
        this.repository.PeopleRoleContext.getAll().then((data:PeopleRole[])=>this.dataSource = data);
        this.displayedColumns = Object.keys(new PeopleRole());
        break; 
      } 
      case 'Pathways': { 
         this.repository.PathwayContext.getAll().then((data:Pathway[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new Pathway());
         break; 
      } 
      case 'Group': { 
         this.repository.GroupContext.getAll().then((data:Group[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new Group());
         break; 
      } 
      case 'Pathway Module': { 
         this.repository.PathwayModuleContext.getAll().then((data:PathwayModule[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new PathwayModule());
         break; 
      }
      case 'Module': { 
         this.repository.ModuleContext.getAll().then((data:Module[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new Module());
         break; 
      }
      case 'Login Role': { 
         this.repository.LoginRoleContext.getAll().then((data:LoginRole[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new LoginRole());
         break; 
      } 
      case 'Task': { 
         this.repository.TaskContext.getAll().then((data:Task[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new Task());
         break; 
      } 
      case 'Batch': { 
         this.repository.BatchContext.getAll().then((data:Batch[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new Batch());
         break; 
      } 
      case 'Progression': { 
         this.repository.ProgressionContext.getAll().then((data:Progression[])=>this.dataSource = data);
         this.displayedColumns = Object.keys(new Progression());
         break; 
      } 
      


      default: { 
         //statements; 
         break; 
      }     
   } 
   this.title = value;
  };

}

