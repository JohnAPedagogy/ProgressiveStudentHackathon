import { Person } from "src/app/models/domain/Person";
import { Session } from "../../sauth/login.service";
import { SessionStatus } from "src/app/enumerations/domain_enums";
import { Repository } from "../concrete/Repository";
import { IRepository } from "../interfaces/IRepo";

// @Injectable(
//   //{providedIn: 'root'}
// )
export class PersonRepository extends Repository<Person> {
  constructor(context:IRepository<Person>){
    super(context);
  }

  async login(session:Session): Promise<SessionStatus>{
    return await this.context.find({uniCode:session.loginInfo?.useremail}).then((person:Person[])=>{
      if(person.length>0){
        session.user = person[0];
        return SessionStatus.LoginSuccess;
      }else{
        return SessionStatus.InvalidUserOrPass;
      }
    })
  }
 
}


