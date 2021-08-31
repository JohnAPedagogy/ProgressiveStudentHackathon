export interface IRepository<T> {

 get(id:Number): Promise<T>;
 
  getAll(): Promise<T[]>;
 
  add(item:T):Promise<T>

  addRange(...items: T[]): Promise<number>;

  remove(item:T):Promise<T>

  removeRange(...items: T[]): Promise<void>;

  find(gql:any): Promise<T[]>

  serverFun(fun:string,gql:any): Promise<any>
 
}


export class TypeHelper {

  static typeName(ctor: { name:string }) : string {
      return ctor.name;
  }
}
/*
interface Array<Type> {
  /**
   * Gets or sets the length of the array.
   *
   length: number;
 
   /**
    * Removes the last element from an array and returns it.
    *
   pop(): Type | undefined;
  
   /**
    * Appends new elements to an array, and returns the new length of the array.
    *
   push(...items: Type[]): number;
  
   // ...
 }
*/