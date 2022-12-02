import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { HomeComponent } from './home/home.component';
import {NavbarAdminModule} from "./navbar-admin/navbar-admin.module";
import {GestionUsersModule} from "../gestion-users/gestion-users.module";
import {UserNavModule} from "../gestion-users/user-nav/user-nav.module";
import {GestionContratsModule} from "../gestion-contrats/gestion-contrats.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NavbarAdminModule,
    GestionUsersModule,
    UserNavModule
  ],
  exports : []
})
export class SharedModule { }
