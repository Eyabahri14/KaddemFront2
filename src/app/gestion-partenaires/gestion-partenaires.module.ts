import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionPartenairesRoutingModule } from './gestion-partenaires-routing.module';
import { PartenaireTableComponent } from './partenaire-table/partenaire-table.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NavbarAdminModule} from "../shared/navbar-admin/navbar-admin.module";
import {UserNavModule} from "../gestion-users/user-nav/user-nav.module";


@NgModule({
  declarations: [
    PartenaireTableComponent
  ],
  imports: [
    CommonModule,
    GestionPartenairesRoutingModule,
    FormsModule,

    Ng2SearchPipeModule,
    NavbarAdminModule,
    UserNavModule
  ]
})
export class GestionPartenairesModule { }
