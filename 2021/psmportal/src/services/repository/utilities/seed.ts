
import * as faker from "faker";
import { Person } from "src/models/domain/Person";

export class Faker{
  constructor(){}

  personOne():Person{
    return new Person();
  }

  personMany(count:number):Person[]{
    const people:Person[]=[];
    for(let i=0;i<count;i++){
      people.push(new Person() );
    }
    return people ;
  }
}



// Property Decorator
export function FakerTypeName() {
  return function(target: any, key: string) {

    let val = target[key];

    const getter = () =>  {
        return val;
    };
    const setter = (next:any) => {
        if(next=="Faker" || next =='faker')
          val = faker.name.findName();
        console.log('generated fake name=',val);
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });

  };
}