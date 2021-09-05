import { Pathway } from '../../../models/domain/Pathway';
import { Repository } from "./Repository";
import { IRepository } from "../interfaces/IRepo";

export class PathwayRepository extends Repository<Pathway> {
  constructor(context:IRepository<Pathway>){
    super(context);
  } 
}


