
import * as Realm from "realm-web";
import {IRepository} from "../interfaces/IRepo"

export class StitchContext<Type> implements IRepository<Type> {

  app: Realm.App = new Realm.App({ id: "progressive-student-ljdmz" });
  // constructor(
  //   protected Context : IRepository<Type>
  // ){

  // }
  async init_db():Promise<any>{
    const credentials = Realm.Credentials.anonymous();
    try {
      // Authenticate the user
      const user: Realm.User = await app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      if(app.currentUser)console.log(user.id === app.currentUser.id?"Login Successful!":"Invalid user!")
      return user
    } catch(err) {
      console.error("Failed to log in", err);
    }
  }

  // get(id:Number): Type
  // {
  //   return this.Context.get(id);
  // }
 
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
