import { Component } from '@angular/core';
import { Session } from './services/sauth/login.service';
import { Observable } from 'rxjs';
import { AuthService } from './services/sauth/auth.service';
import { SessionState } from './store/session.state';
import { Store, Select } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'psmportal';

   isUserLoggedIn = false;
   @Select(SessionState.getSession) 
   session!: Observable<Session>;

   constructor(private authService: AuthService) {}

   ngOnInit() {
      let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);

      if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else
         this.isUserLoggedIn = false;
   }
}
