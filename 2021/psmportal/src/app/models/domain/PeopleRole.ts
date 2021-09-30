import * as faker from "faker";

const id = faker.datatype.number(99999);


export class PeopleRole {
  id: number = id;
  personId?: number ;
  loginRoleId?: number  ;
}  
