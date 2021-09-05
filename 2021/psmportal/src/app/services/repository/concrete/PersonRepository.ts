import { Injectable } from "@angular/core";
import { Person } from "src/app/models/domain/Person";
import { Session, SessionStatus } from "../../sauth/login.service";
import { Repository } from "../concrete/Repository";
import { IRepository } from "../interfaces/IRepo";
import { StitchContext } from "./StitchContext";

// @Injectable(
//   //{providedIn: 'root'}
// )
export class PersonRepository extends Repository<Person> {
  //constructor(context:IRepository<Person>=new StitchContext<Person>("Person")){
  constructor(context:IRepository<Person>){
    super(context);
  }

  async login(session:Session): Promise<SessionStatus>{
    return await this.context.find({uniCode:session.loginInfo?.useremail}).then((person:Person[])=>{
      if(person!=null){
        session.user = person[0];
        return SessionStatus.LoginSuccess;
      }else{
        return SessionStatus.InvalidUserOrPass;
      }
    })
  }
 
}


