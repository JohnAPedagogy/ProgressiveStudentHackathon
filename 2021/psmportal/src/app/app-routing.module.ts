import { SidebarComponent } from './../app/uic/layout/sidebar/sidebar.component';
import { HomeComponent } from './../app/uic/template/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './uic/auth/login/login.component';
import { LogoutComponent } from './uic/auth/logout/logout.component';
import { NotFoundComponent } from 'src/app/uic/template/not-found/not-found.component';

import { ExpenseGuard } from './services/sauth/expense.guard';

let routes: Routes = getRoute();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

 function getRoute(){
  return [
    { path: 'home', component: HomeComponent },
    { path: 'home/teaching', component: SidebarComponent },
    { path: 'sidebar', component: SidebarComponent, canActivate: [ExpenseGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ]
}



