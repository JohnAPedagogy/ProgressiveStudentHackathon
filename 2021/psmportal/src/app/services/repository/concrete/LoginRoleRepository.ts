import { LoginRole } from '../../../models/domain/LoginRole';
import { Repository } from "./Repository";
import { IRepository } from "../interfaces/IRepo";

export class LoginRoleRepository extends Repository<LoginRole> {
  constructor(context:IRepository<LoginRole>){
    super(context);
  } 
}


