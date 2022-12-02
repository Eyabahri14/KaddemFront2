import { Component, OnInit } from '@angular/core';
import {UserService} from "../userService/user.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  user:any;
  role:any;
  term:string ='';
  page:number=0;
  pages: Array<number> | undefined;
  orderHeader:String='';
  isDescOrder:boolean=true;
  singleUser:any;

  constructor(public userService:UserService) {
  }

  ngOnInit(): void {
    this.afficher();
  }

  setPage(i:any,event:any){
    event.preventDefault();
    this.page=i;
    this.afficher();

  }



  /* afficher(){
     this.userService.GetAllUsers().toPromise().then((res:any)=>
     {
       console.log(res);

       this.user=res;
       console.log("role :")
     }).catch((err)=>{
       console.log("erreur a afficher les utilisateurs");
     })
   }
 */

  deleteUser(userName:any){

    this.userService.deleteUser(userName).subscribe((res)=>
    {this.afficher() })
  }

  /*
  delete(i:any){
    this.user.splice(i,1)
  } */

  afficher(){
    this.userService.PaginationUsers(this.page).toPromise().then((data:any)=>
    {
      this.user=data['content'];
      this.pages=new Array(data['totalPages']);
      console.log("role :")
    }).catch((err)=>{
      console.log("erreur a afficher les utilisateurs");
    })
  }

  getUsersListPdf(){
    this.userService.generatePdfList().toPromise().then((data:any)=>
    {
      let downloadURL=window.URL.createObjectURL(data)
      let link=document.createElement('a')
      link.href=downloadURL
      link.download="usersList.pdf"
      link.click()
    }).catch((err)=>{
      console.log("erreur a afficher les utilisateurs");
    })
  }


  showUser(user:any){
    this.singleUser=user;

  }

}
