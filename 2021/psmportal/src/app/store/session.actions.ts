
import { LoginInfo } from "../services/sauth/login.service"
import { SessionStatus } from "src/app/enumerations/domain_enums";


export class LoginSession {
    static readonly type = SessionStatus.LoginSession.toString();
    constructor(public payload: LoginInfo) {}
}

export class SessionLogin {
    static readonly type = SessionStatus.Login.toString();
    constructor(public payload: void) {}
}