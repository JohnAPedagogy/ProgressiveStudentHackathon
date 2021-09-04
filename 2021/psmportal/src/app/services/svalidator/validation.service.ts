import { Injectable, Optional } from '@angular/core';
import { Person } from 'src/app/models/domain/Person';
import { PersonRepository } from '../repository/concrete/PersonRepository';
import { StitchContext } from '../repository/concrete/StitchContext';
import { Session, SessionStatus } from '../sauth/login.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
}

export abstract class Validator{
  public data:string;
  public status!:SessionStatus;
  public statuses!: SessionStatus[];
  constructor(data:string){
    this.data=data;
  };
  public getStatuses() : SessionStatus[]{
      return this.statuses;
  };

  public abstract validate(): SessionStatus;
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
  public session:Session;
  constructor(session:Session,
    @Optional() public personContext?:PersonRepository
     ){
    super(''+session.loginInfo.useremail);
    this.session=session;
  }
  public validate(): SessionStatus {
    this.personContext?.login(this.session).then((status:SessionStatus)=>{
      this.status = status;
      this.statuses.push(this.status);
    });
    return this.status;
  }
}

export class PasswordValidator extends Validator {
  constructor(data:string){
    super(data);
  }
  public validate(): SessionStatus {
    this.status = SessionStatus.PasswordOK
    return this.status;
}
}

// ------------------------------ Rules ------------------------------
export class PassCharLimitRule extends Rule {
  constructor(validator: Validator, data:string, private limit=6) {
      super(data);
      this.validated = validator;
  }
  public validate(): SessionStatus {
    if (this.data.length > this.limit){
      this.status = SessionStatus.PasswordOK;
    }else{
      this.status = SessionStatus.PasswordTooShort
      this.statuses.push(this.status);
    }
    return this.status;
  }
}

export class PassSameRepeatPass extends Rule {
  constructor(validator: Validator,data:string, private repeatPass:string) {
      super(data);
      this.validated = validator;
  }

  public validate(): SessionStatus {
    if (this.data == this.repeatPass){
      this.status = SessionStatus.PasswordOK;
    }else{
      this.status = SessionStatus.PasswordDifferentFromRepeat
      this.statuses.push(this.status);
    }
    return this.status;
  }
}

