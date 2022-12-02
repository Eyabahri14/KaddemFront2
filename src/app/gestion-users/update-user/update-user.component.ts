import { Component, OnInit } from '@angular/core';
import {UserService} from "../userService/user.service";
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id:any;
  userE:any={};
  userName:any={};


  user = new FormGroup({
    userName: new FormControl('' ,[Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender : new FormControl('', [Validators.required]),
    phoneNumber:new FormControl('', [Validators.required])
  })

  constructor(private userService:UserService,private router: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.userService.detailUser(this.id).subscribe((res:any)=>{
      this.userE = res;
      //console.log(res);



      console.log(this.userName)
    })


  }

  updateData(user:any){
    console.log("id"+this.id);
    this.userService.UpdateUser(user,this.id).subscribe((res:any)=>{
      //console.log(res);
      console.log(this.id)

      if (res) {
        history.back();
      }

    },(err)=>{
      console.log(err);

    })

  }


}
