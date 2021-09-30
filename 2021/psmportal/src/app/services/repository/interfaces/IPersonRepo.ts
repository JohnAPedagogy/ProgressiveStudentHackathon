import { Person } from "src/app/models/domain/Person";
import { Session } from "../../sauth/login.service";
import { SessionStatus } from "src/app/enumerations/domain_enums";
import { IRepository } from "./IRepo";

export interface IPersonRepository extends IRepository<Person> {

  login(session:Session): Promise<SessionStatus>
 
}


