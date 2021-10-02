import * as faker from "faker";

const id = faker.datatype.number(99999);


export class PeopleRole {
  ID: number = id;
  PersonId?: number ;
  LoginRoleId?: number  ;
}  
