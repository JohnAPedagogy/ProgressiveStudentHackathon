

import * as Realm from "realm-web";
import {IRepository, TypeHelper} from "../interfaces/IRepo"

export class StitchContext<T> implements IRepository<T> {

  app: Realm.App = new Realm.App({ id: "progressive-student-ljdmz" });
  db:any

  [key: string]: any
  constructor(x : string) {
    this.TName = x;
    this.init_db();
  }

  async init_db():Promise<any>{
    const credentials = Realm.Credentials.anonymous();
    try {
      // Authenticate the user
      const user: Realm.User = await this.app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      if(this.app.currentUser){
        console.log(user.id === this.app.currentUser.id?"Login Successful!":"Invalid user!");
        const mongodb = this.app.currentUser.mongoClient("mongodb-atlas");
        this.db=mongodb.db('progressive');
      }
      return user
    } catch(err) {
      console.error("Failed to log in", err);
    }
  }
  
  insert_data(data:any,table:string){
    if(this.app.currentUser){
      const mongodb = this.app.currentUser.mongoClient("mongodb-atlas");
      this.db=mongodb.db('progressive');
    }
    return this.db.collection(table).updateOne(data,{$set:data}, {upsert:true})
        .then(()=>{
          return this.run_query(data,table);
    }).catch((err:any) => {
        console.error(err);
    })
  }

  delete_data(table:string,id:number){
    if(this.app.currentUser){
      const mongodb = this.app.currentUser.mongoClient("mongodb-atlas");
      this.db=mongodb.db('progressive');
    }
    return this.db.collection(table).deleteOne({ID:id})
        .then(()=>{
        return this.run_query({},table);
    }).catch((err:any) => {
        console.error(err);
    })
  }

  run_query(q:object,t:string) {
    if(this.app.currentUser){
      const mongodb = this.app.currentUser.mongoClient("mongodb-atlas");
      this.db=mongodb.db('progressive');
    }
    return this.db.collection(t).find(q);
  }
  
  async get(id:Number): Promise<T>
  {
    return  await this.run_query({"ID":id},this.TName)
      ?.then((data:any[] )=>{
        return data[0];
      }).catch((err:any)=>{
        console.error(err);
      }) as T;
  }
 
  async getAll(): Promise<T[]>
  {
    return  await this.run_query({},this.TName)
      ?.then((data:any[] )=>{
        return data;
      }).catch((err:any)=>{
        console.error(err);
      }) as T[];
  }

  async add(item:T):Promise<T>
  {
    return  await this.insert_data(item,this.TName)
      ?.then((data:any[] )=>{
        return data[0];
      }).catch((err:any)=>{
        console.error(err);
      }) as T;
  }

  async addRange(...items: T[]): Promise<number>
  {
    if(this.app.currentUser){
      const mongodb = this.app.currentUser.mongoClient("mongodb-atlas");
      this.db=mongodb.db('progressive');
    }
    return this.db.collection(this.TName).updateMany(items,{$set:items}, {upsert:true})
        .then(()=>{
        return items;//refactor this: not test worthy
    }).catch((err:any) => {
        console.error(err);
    })
  }

  async remove(item:T):Promise<T>
  {
    return  await this.run_query({},this.TName)
      ?.then((data:any[] )=>{
        return data;
      }).catch((err:any)=>{
        console.error(err);
      }) as T;
  }

  async removeRange(...items: T[]): Promise<void>
  {
    const t = await this.run_query({},this.TName)
      ?.then((data:any[] )=>{
        return data;
      }).catch((err:any)=>{
        console.error(err);
      }) as T[];
  }

  async find(gql:any): Promise<T[]>
  {
    return  await this.run_query({},this.TName)
        ?.then((data:any[] )=>{
          return data;
        }).catch((err:any)=>{
          console.error(err);
        }) as T[];
  }

  async serverFun(fun:string, gql:any):Promise<any>{
    return  await this.run_query({},this.TName)
        ?.then((data:any[] )=>{
          return data;
        }).catch((err:any)=>{
          console.error(err);
        }) ;
  }
 
}
