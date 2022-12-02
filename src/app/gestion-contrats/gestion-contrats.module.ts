import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratTableComponent } from './contrat-table/contrat-table.component';
import {GestionContratsRoutingModule} from "./gestion-contrats-routing.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";
import {GestionCertifsModule} from "../gestion-certifs/gestion-certifs.module";
import {NavbarAdminModule} from "../shared/navbar-admin/navbar-admin.module";
import {UserNavModule} from "../gestion-users/user-nav/user-nav.module";



@NgModule({
  declarations: [
    ContratTableComponent
  ],
  imports: [
    CommonModule,
    GestionContratsRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    GestionCertifsModule,
    NavbarAdminModule,
    UserNavModule
  ]
})
export class GestionContratsModule { }
