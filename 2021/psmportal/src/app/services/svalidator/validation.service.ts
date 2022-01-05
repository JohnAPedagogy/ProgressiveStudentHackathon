import { Injectable, Optional } from '@angular/core';
import { Person } from 'src/app/models/domain/Person';
import { PersonRepository } from '../repository/concrete/PersonRepository';
import { StitchContext } from '../repository/concrete/StitchContext';
import { SessionStatus } from '../../enumerations/domain_enums';
import { LoginService, Session } from '../sauth/login.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  // constructor(private auth:LoginService,
  //   loginValidator:LoginValidator) { 
  //     loginValidator = new LoginValidator(this.auth.PersonContext)
  //   }
}

export abstract class Validator{
  public data:string;
  public status!:SessionStatus;
  public statuses!: SessionStatus[];
  constructor(data:string){
    this.data=data;
    this.statuses=[];
  };
  public getStatuses() : SessionStatus[]{
      return this.statuses;
  };

  public abstract validate(): Promise<SessionStatus>;
}

export abstract class Rule extends Validator{
  validated!: Validator;
  // public abstract getStatuses(): SessionStatus[];
}

// ------------------------------ Validators ------------------------------
@Injectable({
  providedIn: 'root'
})
export class LoginValidator extends Validator{
  constructor(
      public session:Session
     ){
    super('');
  }
  public validate(): Promise<SessionStatus> {
      return this.session.personContext?.login(this.session).then((status:SessionStatus)=>{
      this.status = status;
      this.getStatuses().push(this.status);
      return this.status;
    });
  }
}

export class PasswordValidator extends Validator {
  constructor(data:string){
    super(data);
  }
  public validate(): Promise<SessionStatus> {
    this.status = SessionStatus.PasswordOK
    return Promise.resolve(this.status);
}
}

// ------------------------------ Rules ------------------------------
export class PassCharLimitRule extends Rule {
  constructor(validator: Validator, data:string, private limit=6) {
      super(data);
      this.validated = validator;
  }
  public validate(): Promise<SessionStatus> {
    if (this.data.length > this.limit){
      this.status = SessionStatus.PasswordOK;
    }else{
      this.status = SessionStatus.PasswordTooShort
      this.statuses.push(this.status);
    }
    return Promise.resolve(this.status);
  }
}

export class PassSameRepeatPass extends Rule {
  constructor(validator: Validator,data:string, private repeatPass:string) {
      super(data);
      this.validated = validator;
  }

  public validate(): Promise<SessionStatus> {
    if (this.data == this.repeatPass){
      this.status = SessionStatus.PasswordOK;
    }else{
      this.status = SessionStatus.PasswordDifferentFromRepeat
      this.statuses.push(this.status);
    }
    return Promise.resolve(this.status);
  }
}

