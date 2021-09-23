import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/domain/Person';
import { Resource } from 'src/app/models/domain/Resource';
import { RepoService } from 'src/app/services/repository/repo.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor(private repository:RepoService) { }

  //Instance the dataSource variable, which stores all the information displayed on the table
  dataSource!:Person[];

  //OnInit we get all the data from the correct context and put it on the dataSource variable
  ngOnInit(): void {
    this.repository.PersonContext.getAll().then((data:Person[])=>this.dataSource = data);
  }

  //The resource variable is going to be used to connect with the sidebar
  @Input() resource!:Resource;

  //The collums are the attributes of the respective entity 
  displayedColumns: string[] =Object.keys(new Person());
}

