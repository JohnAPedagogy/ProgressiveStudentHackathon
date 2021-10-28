import * as faker from "faker";

const id = faker.datatype.number(99999);


export class PeopleRole {

  static metadata:any={
    'PersonId':{
      "required":true,
      "max":10,
      "min":3
    },
    'LoginRoleId':{
      "required":true,
      "max":5
    },
    'ID':{
      "required":true,
      "min":7
    }
  };
  ID: number = id;
  PersonId?: number ;
  LoginRoleId?: number  ;
}  
