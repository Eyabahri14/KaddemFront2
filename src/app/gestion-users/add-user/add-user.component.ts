import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../userService/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userFile: any;
  public imagePath: any;
  imgURL: any;
  message:any;

  user = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender : new FormControl('', [Validators.required]),
    phoneNumber:new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })

  public errorMessage: any;
  public styl :any;
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  /*
    addData(){
      this.userService.adduser(this.user.value).subscribe((res: any) => {
        alert('user added ');
        history.back();
      }, (err) => {
        console.log(err);

      })
    }
    */


  addData() {
    const formData = new FormData();
    const user = this.user.value;
    formData.append('user', JSON.stringify(user));
    formData.append('file', this.userFile);
    this.userService.adduser(formData).subscribe(data => {
      alert('user added ');
      this.setMessage("successfully item added", "#43b581");

    }, (err) => {
      console.log(err);
      history.back();
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
  setMessage(msg: any, color: any) {
    this.errorMessage = msg;
    this.styl = {
      backgroundColor: color,
    }
    setTimeout(() => {
      this.errorMessage = null;
    }, 4000);
  }


}
