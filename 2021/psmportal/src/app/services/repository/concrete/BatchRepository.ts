import { Batch } from './../../../models/domain/Batch';
import { Repository } from "../concrete/Repository";
import { IRepository } from "../interfaces/IRepo";

export class BatchRepository extends Repository<Batch> {
  constructor(context:IRepository<Batch>){
    super(context);
  } 
}


