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

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  openSidebar(value: boolean) {
    value ? this.sideBarOpened = true : this.sideBarOpened = false; 
  }

}
