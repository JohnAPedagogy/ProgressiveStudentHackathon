import { Group } from '../../../models/domain/Group';
import { Repository } from "./Repository";
import { IRepository } from "../interfaces/IRepo";

export class GroupRepository extends Repository<Group> {
  constructor(context:IRepository<Group>){
    super(context);
  } 
}


