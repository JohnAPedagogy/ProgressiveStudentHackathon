import { Person } from 'src/app/models/domain/Person';
import { DomainAdminService } from './../../../services/sadmin/domain-admin.service';
import { Repository } from './../../../services/repository/concrete/Repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(admin:DomainAdminService) {
   }

  ngOnInit(): void {
  }


  getTable(s:string){

  }
  sideBarOpened = true;

  // currentResource : resp

  // entities = this.admin.Resources;
  entities = ['Person', 'Teaching Class', 'People Role', 'Pathways', 'Resource',
  'Group', 'Pathway Module', 'Module', 'Task', 'Login Role', 'Batch', 'Progression']
  
  teachingClasses = ['Software Design Group 1', 'Software Design Group 14 & 13',
  'Math Group 1','Math Group 9'];

  tableTitle : string = ""

  onEntityClick(newTitle : string){
    this.tableTitle = newTitle;
  }

  expandedIndex = 0;

  openSidebar(value: boolean) {
    value ? this.sideBarOpened = true : this.sideBarOpened = false; 
  }
  
}
