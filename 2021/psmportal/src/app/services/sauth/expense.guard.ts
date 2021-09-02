import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
   providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;
          return this.checkLogin(url);
      }

      checkLogin(url: string): true | UrlTree {
         console.log("Url: " + url)
         let val: string | null = localStorage.getItem('isUserLoggedIn');
         if(val != null && val == "true"){
            if(url == "/login")
               return this.router.parseUrl('/admin');
            else 
               return true;
         } 
         else {
            return this.router.parseUrl('/login');
         }
      }
}
