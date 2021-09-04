import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/sauth/auth.service';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoginInfo, Session } from '../../../services/sauth/login.service';
import { SessionState } from 'src/app/store/session.state';
import { LoginSession } from 'src/app/store/session.actions';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   userName: string = "";
   password: string = "";
   formData: FormGroup;

   loginInfo!:LoginInfo;

   @Select(SessionState.getSession) 
   session!: Observable<Session>;

   constructor(
      private authService : AuthService, 
      private store : Store, 
      private router : Router
      ) {
        this.formData = new FormGroup({
          userName: new FormControl("dede"),
          password: new FormControl("dede"),
         });
    }

   ngOnInit() {
      this.formData = new FormGroup({
         userName: new FormControl("dede"),
         password: new FormControl("dede"),
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;
      this.loginInfo.useremail = data.useremail;
      this.loginInfo.password = data.password;

      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.store.dispatch(new LoginSession(this.loginInfo));

      this.authService.login(this.userName, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
           if(data) this.router.navigate(['/admin']); 
      });
   }
}
