import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "../_auth/auth.guard";
import {ContratTableComponent} from "./contrat-table/contrat-table.component";

const routes: Routes = [
  {
    path:'DashboardContrat',
    children :[
      {path:'GetContrats', component:ContratTableComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionContratsRoutingModule { }
