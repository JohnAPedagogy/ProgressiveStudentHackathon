import { TeachingClass } from '../../../models/domain/TeachingClass';
import { Repository } from "./Repository";
import { IRepository } from "../interfaces/IRepo";

export class TeachingClassRepository extends Repository<TeachingClass> {
  constructor(context:IRepository<TeachingClass>){
    super(context);
  } 
}


