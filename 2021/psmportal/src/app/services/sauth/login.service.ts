import { Inject, Injectable, Injector, NgModule, Optional, ReflectiveInjector } from '@angular/core';
import { Person } from 'src/app/models/domain/Person';
import { Validator,LoginValidator } from '../svalidator/validation.service';
import { SessionStatus } from "src/app/enumerations/domain_enums";
import { PersonRepository } from '../repository/concrete/PersonRepository';
import { StitchContext } from '../repository/concrete/StitchContext';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public login(s:Session):void{
    const validator = new LoginValidator(s)
    s.validations.push(validator);
    s.validations[0].validate().then(data=>{
      s.status=data;
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class Session{
    public loginInfo!:LoginInfo;
    public validations:Validator[]=[];
    public status?:SessionStatus;
    public user?:Person;
    public personContext = new PersonRepository(new StitchContext<Person>("Person"));
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