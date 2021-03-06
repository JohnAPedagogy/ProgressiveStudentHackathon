
import { IRepository } from "../interfaces/IRepo";

export class Repository<T> implements IRepository<T> {


  constructor(protected context:IRepository<T>) {
  }
  
  async get(id:Number): Promise<T>
  {
    return  await this.context.get(id);
  }
 
  async getAll(): Promise<T[]>
  {
    return await this.context.getAll();
  }

  async add(item:T):Promise<T>
  {
    return  await this.context.add(item);
  }

  async addRange(...items: T[]): Promise<number>
  {
    return await this.context.addRange(...items);
  }

  async remove(item:T):Promise<number>
  {
    return  await this.context.remove(item)
  }

  async removeRange(...items: number[]): Promise<number>
  {
    return await this.context.removeRange(...items)
  }

  async find(gql:any): Promise<T[]>
  {
    return  await this.context.find(gql);
  }

  async serverFun(fun:string, gql:any):Promise<any>{
    return  await this.context.serverFun(fun,gql);
  }
 
}
