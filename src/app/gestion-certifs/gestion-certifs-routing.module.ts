import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CertifTableComponent} from "./certif-table/certif-table.component";
import {AuthGuard} from "../_auth/auth.guard";

const routes: Routes = [
  {
    path:'DashboardCertif',
    children :[
      {path:'GetCertifs', component:CertifTableComponent , canActivate:[AuthGuard], data:{roles:['Admin']}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCertifsRoutingModule { }
