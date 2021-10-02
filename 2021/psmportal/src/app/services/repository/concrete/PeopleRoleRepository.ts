import { PeopleRole } from '../../../models/domain/PeopleRole';
import { Repository } from "./Repository";
import { IRepository } from "../interfaces/IRepo";

export class PeopleRoleRepository extends Repository<PeopleRole> {
  constructor(context:IRepository<PeopleRole>){
    super(context);
  } 
}


