import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserTableComponent} from "./user-table/user-table.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [

  {path:'login', component:LoginComponent},
  {
    path:'DashboardUser',
    children :[
      {path:'GetUsers' ,component:UserTableComponent},
      {path:'addUsers' ,component:AddUserComponent},
      {path: "modifyUser/:id",component :UpdateUserComponent },
      {path:'profile', component:UserProfileComponent},


]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUsersRoutingModule { }
