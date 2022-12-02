import { Component, OnInit } from '@angular/core';
import {UserService} from "../userService/user.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private userAuthService: AuthService, private router: Router) {}
  username:any;
  nom:any;
  prenom :any;
  email :any;
  gender:any;
  phone:any;

  userFile: any;
  public imagePath: any;
  imgURL: any;
  message:any;

  userLogin= new FormGroup({
    userName : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])

  })

  user= new FormGroup({
    userName: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender : new FormControl('', [Validators.required]),
    phoneNumber:new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })




  ngOnInit(): void {

    $(document).ready(function () {

      $("#sign-in-btn").click(function () {

        $(".containerr").removeClass("sign-up-mode");

      });

      $("#sign-up-btn").click(function () {
        $(".containerr").addClass("sign-up-mode");

      });

    });
  }

  login() {
    this.userService.login(this.userLogin.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        this.username=response.user.userName;
        this.nom=response.user.nom;
        this.prenom=response.user.prenom;
        this.email=response.user.email;
        this.gender=response.user.gender;
        this.phone=response.user.phoneNumber;

        localStorage.setItem('username', this.username);
        localStorage.setItem('nom', this.nom);
        localStorage.setItem('prenom', this.prenom);
        localStorage.setItem('email', this.email);
        localStorage.setItem('gender', this.gender);
        localStorage.setItem('phone', this.phone);




        if (role === 'Admin') {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }


  Register() {
    const formData = new FormData();
    const user = this.user.value;
    console.log(user)
    formData.append('user', JSON.stringify(user));
    formData.append('file', this.userFile);
    this.userService.adduser(formData).subscribe(data => {
      alert('user added ');
      console.log(user);
    }, (err) => {
      console.log(err);
    });
  }


  onSelectFile(event :any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }}


}
