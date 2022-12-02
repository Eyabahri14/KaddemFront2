import { Component, OnInit } from '@angular/core';
import {UserService} from "../userService/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username:any;
  nom:any;
  prenom :any;
  email :any;
  gender:any;
  phone:any;
  role:any;

  constructor(public userService:UserService) {
    this.username=localStorage.getItem('username');
    this.nom=localStorage.getItem('nom');
    this.prenom=localStorage.getItem('prenom');
    this.email=localStorage.getItem('email');
    this.gender=localStorage.getItem('gender');
    this.phone=localStorage.getItem('phone');
    this.role=localStorage.getItem('roles');



  }
  ngOnInit(): void {
  }


}
