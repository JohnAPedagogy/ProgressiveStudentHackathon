import { Module } from '../../../models/domain/Module';
import { Repository } from "./Repository";
import { IRepository } from "../interfaces/IRepo";

export class ModuleRepository extends Repository<Module> {
  constructor(context:IRepository<Module>){
    super(context);
  } 
}


