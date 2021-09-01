
import * as faker from "faker";
import { Person } from "src/models/domain/Person";

export class Faker{
  constructor(){}

  public personeOne():Person{
    return ({
      id: 10,
      groupId: 1,
      uniCode: 'u7654321',
      sgCode: '',
      lastName: 'faker',
      otherNames: 'Othername',
      startDate: '2021-01-01'
    });
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
        console.log('generating fake name...');
        if(next=="Faker" || next =='faker')
        val = faker.name.findName();
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });

  };
}