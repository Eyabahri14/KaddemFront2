import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCertifsRoutingModule } from './gestion-certifs-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NavbarAdminModule} from "../shared/navbar-admin/navbar-admin.module";
import { CertifTableComponent } from './certif-table/certif-table.component';
import { CertifErrorsComponent } from './certif-errors/certif-errors.component';
import {UserNavModule} from "../gestion-users/user-nav/user-nav.module";
import {NgToastModule} from "ng-angular-popup";
import {NgConfirmModule} from "ng-confirm-box";


@NgModule({
  declarations: [
    CertifTableComponent,
    CertifErrorsComponent
  ],
  imports: [
    CommonModule,
    GestionCertifsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NavbarAdminModule,
    UserNavModule,
    NgToastModule,
    NgConfirmModule
  ],
  exports :[CertifErrorsComponent]
})
export class GestionCertifsModule { }
