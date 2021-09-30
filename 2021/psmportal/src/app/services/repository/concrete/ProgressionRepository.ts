import { Progression } from '../../../models/domain/Progression';
import { Repository } from "./Repository";
import { IRepository } from "../interfaces/IRepo";

export class ProgressionRepository extends Repository<Progression> {
  constructor(context:IRepository<Progression>){
    super(context);
  } 
}


