import { HomeComponent } from './uic/template/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './uic/layout/header/header.component';
import { SidebarComponent } from './uic/layout/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms'; 
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './uic/auth/login/login.component';
import { LogoutComponent } from './uic/auth/logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { SessionState } from './store/session.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin' ;
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AuthService } from './services/sauth/auth.service';
import { RepoService } from './services/repository/repo.service';
import { LoginService } from './services/sauth/login.service';
import { Session } from  './services/sauth/login.service';
import { DataTableComponent } from './uic/widgets/data-table/data-table.component';
import { CreateEditDomainModelComponent } from './uic/widgets/create-edit-domain-model/create-edit-domain-model.component';
import { EntityFormComponent } from './uic/widgets/entity-form/entity-form.component';;



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    DataTableComponent,
    CreateEditDomainModelComponent,
    EntityFormComponent,
    EntityFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatListModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([
      SessionState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [
    AuthService,
    LoginService, 
    Session, 
    RepoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
