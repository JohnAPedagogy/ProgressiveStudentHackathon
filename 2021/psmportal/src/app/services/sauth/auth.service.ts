import { Injectable } from '@angular/core';
import { Session } from '../sauth/login.service';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';
import { SessionState } from 'src/app/store/session.state';
import { SessionLogin } from 'src/app/store/session.actions';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   isUserLoggedIn: boolean = false;

   @Select(SessionState.getSession) 
   session!: Observable<Session>;

   constructor(private store : Store) { 
   }

   login(userName: string, password: string): Observable<any> {
      this.store.dispatch(new SessionLogin());//.subscribe(data =>console.log(data));

      this.isUserLoggedIn = (userName == 'admin' && password == 'admin');
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
   }

   logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }
}