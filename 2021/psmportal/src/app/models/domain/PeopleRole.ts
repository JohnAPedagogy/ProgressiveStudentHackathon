import * as faker from "faker";

const id = faker.datatype.number(99999);


export class PeopleRole {

  static metadata:any={
    'PersonId':{
      "displayName" : "Person ID ",
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'LoginRoleId':{
      "displayName" : "Login Role ID",
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'ID':{
      "disabled":"disabled",
      "type":"text",
      "required":true,
    }
  };
  ID: number = id;
  PersonId?: number ;
  LoginRoleId?: number  ;
}  
