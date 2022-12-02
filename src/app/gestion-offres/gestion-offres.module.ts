import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferTableComponent } from './offer-table/offer-table.component';
import {GestionOffresRoutingModule} from "./gestion-offres-routing.module";
import {NavbarAdminModule} from "../shared/navbar-admin/navbar-admin.module";
import {UserNavModule} from "../gestion-users/user-nav/user-nav.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    OfferTableComponent
  ],
  imports: [
    CommonModule,
    GestionOffresRoutingModule,
    NavbarAdminModule,
    UserNavModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class GestionOffresModule { }
