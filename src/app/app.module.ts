import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarAdminModule} from "./shared/navbar-admin/navbar-admin.module";
import {GestionCertifsModule} from "./gestion-certifs/gestion-certifs.module";
import {UserNavModule} from "./gestion-users/user-nav/user-nav.module";
import {NgToastModule} from "ng-angular-popup";
import {NgConfirmModule} from "ng-confirm-box";
import {GestionPartenairesModule} from "./gestion-partenaires/gestion-partenaires.module";
import {FormsModule} from "@angular/forms";
import {GestionOffresModule} from "./gestion-offres/gestion-offres.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarAdminModule,
    FormsModule,
    UserNavModule,
    NgToastModule,
    NgConfirmModule,
    GestionCertifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
