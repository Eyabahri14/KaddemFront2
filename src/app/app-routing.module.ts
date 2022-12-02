import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"GestionUsers",loadChildren:()=>import('./gestion-users/gestion-users.module')
      .then(m=>m.GestionUsersModule)},
  {path:"",loadChildren:()=>import('./shared/shared.module')
      .then(m=>m.SharedModule)},
  {path:"GestionCertifs",loadChildren:()=>import('./gestion-certifs/gestion-certifs.module')
      .then(m=>m.GestionCertifsModule)},
  {path:"GestionPartenaires",loadChildren:()=>import('./gestion-partenaires/gestion-partenaires.module')
      .then(m=>m.GestionPartenairesModule)},
  {path:"GestionOffres",loadChildren:()=>import('./gestion-offres/gestion-offres.module')
      .then(m=>m.GestionOffresModule)},
  {path:"GestionContrats",loadChildren:()=>import('./gestion-contrats/gestion-contrats.module')
      .then(m=>m.GestionContratsModule)},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
