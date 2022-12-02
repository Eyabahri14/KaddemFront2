import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../userService/user.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {

  username:any;
  nom:any;
  prenom :any;
  constructor(public userService:UserService,private userAuthService: AuthService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.username=localStorage.getItem('username');
    this.nom=localStorage.getItem('nom');
    this.prenom=localStorage.getItem('prenom');

  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }

}
