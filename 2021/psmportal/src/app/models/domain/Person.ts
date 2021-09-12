// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const uid = faker.datatype.number(99999);

export class Person {
  id?: number =  uid;
  groupId?: number=1;
  uniCode?: string = `u20${uid.toString().padEnd(5,'0')}`;
  sgCode?: string | null = `s20${uid.toString().padEnd(5,'0')}`;
  password?: string;
  activationCode?: string;
  isActive?: boolean;
  lastName?: string = faker.name.lastName();
  otherNames?: string = faker.name.firstName();
  startDate?: Date | string = '2021-01-01'
}
