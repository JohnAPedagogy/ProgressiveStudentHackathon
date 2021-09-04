import { Person } from "src/app/models/domain/Person";
import { Session, SessionStatus } from "../../sauth/login.service";
import { IRepository } from "./IRepo";

export interface IPersonRepository extends IRepository<Person> {

  login(session:Session): Promise<SessionStatus>
 
}


