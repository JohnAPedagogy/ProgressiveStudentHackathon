import { PeopleRole } from './../../../models/domain/PeopleRole';
import { TeachingClass } from './../../../models/domain/TeachingClass';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/domain/Person';
import { Resource } from 'src/app/models/domain/Resource';
import { RepoService } from 'src/app/services/repository/repo.service';
import { Pathway } from 'src/app/models/domain/Pathway';

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
    
  }
  
  //The collums are the attributes of the respective entity 
  displayedColumns: string[] =Object.keys(new Person());


  title : string = "";


  @Input()  set currentEntity (value : string){
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
      default: { 
         //statements; 
         break; 
      }     
   } 
   this.title = value;
  };

}

