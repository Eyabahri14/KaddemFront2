import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserTableComponent} from "../gestion-users/user-table/user-table.component";
import {PartenaireTableComponent} from "./partenaire-table/partenaire-table.component";


const routes: Routes = [

  {
    path:'DashboardPartenaire',
    children :[
      {path:'GetPartenaires' ,component:PartenaireTableComponent},



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionPartenairesRoutingModule { }
