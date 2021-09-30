import { Task } from '../../../models/domain/Task';
import { Repository } from "./Repository";
import { IRepository } from "../interfaces/IRepo";

export class TaskRepository extends Repository<Task> {
  constructor(context:IRepository<Task>){
    super(context);
  } 
}


