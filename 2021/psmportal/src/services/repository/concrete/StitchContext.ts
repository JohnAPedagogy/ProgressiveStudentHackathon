
import { ReadVarExpr } from "@angular/compiler";
import * as Realm from "realm-web";
import {IRepository} from "../interfaces/IRepo"

export class StitchContext<Type> implements IRepository<Type> {

  app: Realm.App = new Realm.App({ id: "progressive-student-ljdmz" });
  db:any
  // constructor(
  //   protected Context : IRepository<Type>
  // ){

  // }
  async init_db():Promise<any>{
    const credentials = Realm.Credentials.anonymous();
    try {
      // Authenticate the user
      const user: Realm.User = await this.app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      if(this.app.currentUser)console.log(user.id === this.app.currentUser.id?"Login Successful!":"Invalid user!");
      // this.db = this.app.getServiceClient(Realm.RemoteMongoClient.factory,'mongodb-atlas').db('progressive');
      return user
    } catch(err) {
      console.error("Failed to log in", err);
    }
  }

  run_query(q:object,t:string) {
    if(!this.app.currentUser)return;
    const mongodb = this.app.currentUser.mongoClient("mongodb-atlas");
    return mongodb.db('progressive').collection(t).find(q);
    // return mongodb.db("progressive").collection(t).find(q)
    //   .then( (docs: any) => {
    //   console.dir(docs);
    //   //const props=Object.keys(c)
    //   return docs[0] as Type;
    // }).catch((err: any) => {
    //   console.error(err);
    // });
  }
  
  async get(id:Number): Promise<Type>
  {
    return  await this.run_query({},"Person")
        ?.then((data:any[] )=>{
          return data[0];
        }) as Type;
  }
 
  // getAll(): Type[]
  // {
  //   return this.Context.getAll();
  // }

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
