import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }


  getTable(s:string){

  }
  sideBarOpened = true;

  entities = ['Person', 'Teaching Class', 'People Role', 'Patways', 
    'Group', 'Pathway Module', 'Module', 'Task', 'Login Role', 'Batch', 'Progression'];
  
  teachingClasses = ['Software Design Group 1', 'Software Design Group 14 & 13',
  'Math Group 1','Math Group 9'];

  expandedIndex = 0;

  openSidebar(value: boolean) {
    value ? this.sideBarOpened = true : this.sideBarOpened = false; 
  }

}
