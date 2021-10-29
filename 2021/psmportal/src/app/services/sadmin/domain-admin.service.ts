import { Injectable } from '@angular/core';
import { RepoService } from '../repository/repo.service';

@Injectable({
  providedIn: 'root'
})
export class DomainAdminService {

  constructor(private repository:RepoService) { }

  getP2pCoaches(){
    return [
      {'text': 'Fran','value':1},
      {'text': 'John','value':2},
      {'text': 'Ale','value':3},
    ]

  }

  getNumbers(){
    return [
      {'text': 1,'value':1},
      {'text': 2,'value':2},
      {'text': 3,'value':3},
    ]
  }

}
