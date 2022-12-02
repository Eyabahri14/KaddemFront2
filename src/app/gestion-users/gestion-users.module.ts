import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsersRoutingModule } from './gestion-users-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarAdminComponent} from "../shared/navbar-admin/navbar-admin.component";
import {HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { IndexNavLoginComponent } from './index-nav-login/index-nav-login.component';
import {NavbarAdminModule} from "../shared/navbar-admin/navbar-admin.module";
import {UserNavModule} from "./user-nav/user-nav.module";


@NgModule({
  declarations: [
    UserTableComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserProfileComponent,
    LoginComponent,
    IndexNavLoginComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    GestionUsersRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NavbarAdminModule,
    UserNavModule
  ]
})
export class GestionUsersModule { }
