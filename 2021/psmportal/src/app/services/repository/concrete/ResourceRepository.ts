import { Resource } from 'src/app/models/domain/Resource';
import { Repository } from "./Repository";
import { IRepository } from "../interfaces/IRepo";

export class ResourceRepository extends Repository<Resource> {
  constructor(context:IRepository<Resource>){
    super(context);
  } 
}


