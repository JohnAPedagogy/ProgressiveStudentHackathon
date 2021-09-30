import * as faker from "faker";

const id = faker.datatype.number(9);

export class LoginRole {
  id?: number =  id;
  loginRoleName?: string = "Tutor";
} 
