import { PathwayModule } from '../../../models/domain/PathwayModule';
import { Repository } from "./Repository";
import { IRepository } from "../interfaces/IRepo";

export class PathwayModuleRepository extends Repository<PathwayModule> {
  constructor(context:IRepository<PathwayModule>){
    super(context);
  } 
}


