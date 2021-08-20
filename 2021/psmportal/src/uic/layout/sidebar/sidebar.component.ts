import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpened = true;

  openSidebar(value: boolean) {
    value ? this.sideBarOpened = true : this.sideBarOpened = false;
  }

}
