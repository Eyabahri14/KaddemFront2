import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserNavComponent} from "./user-nav.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
UserNavComponent
  ],
  exports: [
    UserNavComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class UserNavModule { }
