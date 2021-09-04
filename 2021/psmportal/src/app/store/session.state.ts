import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LoginSession, SessionLogin } from './session.actions';
import { Session, SessionStatus } from '../services/sauth/login.service';
import { Injectable } from '@angular/core';

export class SessionStateModel {
    session!: Session;
}

@State<SessionStateModel>({
    name: 'session',
    defaults: {
      session: new Session()
    }
})

@Injectable()
export class SessionState {

  @Selector()
  static getSession(state: SessionStateModel) {
      return state.session
  }

  @Action(LoginSession)
  add({getState, patchState }: StateContext<SessionStateModel>, { payload }:LoginSession) {
      const state = getState();
      let clone:Session ={...state.session} as Session;
      clone.loginInfo = payload;
      clone.status = SessionStatus.LoginSession;
      patchState({
          session: clone
      })
  }

  @Action(SessionLogin)
  update({getState, patchState }: StateContext<SessionStateModel>, { payload }:SessionLogin  ) {
      const state = getState();
      let patch:Session = {...state.session} as Session;
      patch.login();
      patchState({
          session: patch
      })
  }
  



}