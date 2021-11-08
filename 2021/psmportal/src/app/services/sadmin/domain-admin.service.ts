import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/domain/Person';
import { RepoService } from '../repository/repo.service';
import { Group } from './../../models/domain/Group';

@Injectable({
  providedIn: 'root'
})
export class DomainAdminService {

  constructor(private repository:RepoService) { }

  getP2pCoaches() : Promise<any[]>{
    let p2pCoaches : any;

    const query = { "id": { "$gte": 70000 } };

    return this.repository.PersonContext.find(query).then((data: Person[])=>{
      p2pCoaches = data.map(p2pCoach => {
        return{
          "value": p2pCoach.id,
          "text" : p2pCoach.lastName
        }
      });
      console.log(p2pCoaches)
      return p2pCoaches;
    }); 
  }

  getNumbers(){
    return [
      {'text': 1,'value':1},
      {'text': 2,'value':2},
      {'text': 3,'value':3},
    ]
  }

}
