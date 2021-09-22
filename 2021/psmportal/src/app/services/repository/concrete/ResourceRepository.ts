import { Resource } from "src/app/models/domain/Resource";
import { Repository } from "../concrete/Repository";
import { IRepository } from "../interfaces/IRepo";

// @Injectable(
//   //{providedIn: 'root'}
// )
export class ResourceRepository extends Repository<Resource> {
  constructor(context:IRepository<Resource>){
    super(context);
  }

 
}


