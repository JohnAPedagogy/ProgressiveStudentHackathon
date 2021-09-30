import * as faker from "faker";

const id = faker.datatype.number(9);

export class LoginRole {
  ID?: number =  id;
  LoginRoleName?: string = "Tutor";
} 
