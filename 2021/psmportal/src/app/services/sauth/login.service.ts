import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/domain/Person';
import { Validator,LoginValidator } from '../svalidator/validation.service';
import { SessionStatus } from "src/app/enumerations/domain_enums";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
}

export class Session{
    public loginInfo!:LoginInfo;
    public validations:Validator[]=[];
    public status?:SessionStatus;
    public user?:Person;
  constructor(
  ){
    
  }
  public login():void{
    this.validations.push(new LoginValidator(this));
    this.status=this.validations[0].validate()
  }
}

export interface LoginInfo{
  useremail?:string;
  password:string
  repeatPassword?:string
}

// export class Session{
//   constructor(){
    
//   }
// }