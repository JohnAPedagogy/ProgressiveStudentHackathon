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
 @Input() resource!:Resource;
  constructor(private repository:RepoService) { }
  dataSource!:Person[];

  ngOnInit(): void {
    this.repository.PersonContext.getAll().then((data:Person[])=>this.dataSource = data);
  }

  
  displayedColumns: string[] =Object.keys(new Person());
  clickedRows = new Set<Person>();
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

