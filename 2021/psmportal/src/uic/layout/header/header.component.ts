import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() sideBarOpened = new EventEmitter<boolean>();
  opened = false;

  open(value: boolean) {
    this.sideBarOpened.emit(value);
    this.opened =! this.opened;
    this.icon === "close" ? this.icon = "menu" : this.icon = "close";
  }

  icon : string = "close" 


}
