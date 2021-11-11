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

  getNumbers(min : number, max : number){
    let list : any= [];
    for (let i = min; i <= max; i++) {
      // let object = {'text': i, 'value':i};
      // list.push.object
    }
    console.log(list)
    return list
  }

  getName(property : string, metadata : any){
    let name = metadata[property].displayName ? metadata[property].displayName : property
    return name;
  }
}
