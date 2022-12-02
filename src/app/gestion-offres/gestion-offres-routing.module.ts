import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OfferTableComponent} from "./offer-table/offer-table.component";


const routes: Routes = [

  {
    path:'DashboardOffer',
    children :[
      {path:'GetOffers' ,component:OfferTableComponent},



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionOffresRoutingModule { }
