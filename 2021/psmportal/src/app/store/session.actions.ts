import { Person } from "../models/domain/Person"
import { LoginInfo, SessionStatus } from "../services/sauth/login.service"


export class LoginSession {
    static readonly type = SessionStatus.LoginSession.toString();
    constructor(public payload: LoginInfo) {}
}

export class SessionLogin {
    static readonly type = SessionStatus.Login.toString();
    constructor(public payload: void) {}
}