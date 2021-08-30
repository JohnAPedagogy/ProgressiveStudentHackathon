export interface IRepository<Type> {

 get(id:Number): Promise<Type>;
 
  // getAll(): Type[];
 
  // add(item:Type):Type

  // addRange(...items: Type[]): number;

  // remove(item:Type):Type

  // removeRange(...items: Type[]): void;

  // find(gql:any): Type[]
 
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