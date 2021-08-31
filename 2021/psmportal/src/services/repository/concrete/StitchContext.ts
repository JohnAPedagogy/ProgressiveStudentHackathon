

import * as Realm from "realm-web";
import {IRepository, TypeHelper} from "../interfaces/IRepo"

export class StitchContext<T> implements IRepository<T> {

  app: Realm.App = new Realm.App({ id: "progressive-student-ljdmz" });
  db:any
  private TName : string;
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

  // add(item:Type):Type
  // {
  //   return this.Context.add(item);
  // }

  // addRange(...items: Type[]): number
  // {
  //   return this.Context.addRange(...items);
  // }

  // remove(item:Type):Type
  // {
  //   return this.Context.add(item);
  // }

  // removeRange(...items: Type[]): void
  // {
  //   return this.Context.removeRange(...items);
  // }

  // find(gql:any): Type[]
  // {
  //   return this.Context.find(gql);
  // }
 
}
