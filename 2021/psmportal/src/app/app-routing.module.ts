import { AdminComponent } from './../uic/template/admin/admin.component';
import { SidebarComponent } from './../uic/layout/sidebar/sidebar.component';
import { HomeComponent } from './../uic/template/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from 'src/uic/template/not-found/not-found.component';

import { ExpenseGuard } from './expense.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', redirectTo: 'sidebar', pathMatch: 'full' },
  { path: 'sidebar', component: SidebarComponent, canActivate: [ExpenseGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
