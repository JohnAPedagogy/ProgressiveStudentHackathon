import * as faker from "faker";

const id = faker.datatype.number(9);

export class LoginRole {
  static metadata:any={
    'LoginRoleName':{
      "type":"text",
      "required":true,
      "max":10,
      "min":3
    },
    'ID':{
      "disabled":"disabled",
      "type":"text",
      "required":true,
    }
  };
  ID?: number =  id;
  LoginRoleName?: string = "Tutor";
} 
