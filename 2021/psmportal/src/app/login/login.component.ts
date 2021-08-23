import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   userName: string = "";
   password: string = "";
   formData: FormGroup;

   constructor(private authService : AuthService, private router : Router) {
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

      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
           if(data) this.router.navigate(['/sidebar']); 
      });
   }
}
