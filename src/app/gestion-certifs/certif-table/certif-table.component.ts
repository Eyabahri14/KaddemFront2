import { Component, OnInit } from '@angular/core';
import {CertifService} from "../certifService/certif.service";
import {NgForm} from "@angular/forms";
import {NgToastService} from "ng-angular-popup";
import {NgConfirmModule, NgConfirmService} from "ng-confirm-box";

@Component({
  selector: 'app-certif-table',
  templateUrl: './certif-table.component.html',
  styleUrls: ['./certif-table.component.css']
})
export class CertifTableComponent implements OnInit {

  term:any;
  style1="red"
  certif:any;


  page:number=0;
  pages: Array<number> | undefined;

  certifToUpdate = {
    nomCertif:"",
    organismeDeDelivrance:"",
    dateEmission:"",
    dateExpiration:"",
    idDiplome:"",
    urlDiplome:""
  }

  ngOnInit(): void {
  }

  constructor(public certifService:CertifService,private toast:NgToastService,private confirmService:NgConfirmService) {
    this.afficher();
  }

  setPage(i:any,event:any){
    event.preventDefault();
    this.page=i;
    this.afficher();

  }



  afficher(){
    this.certifService.PaginationCertifs(this.page).toPromise().then((data:any)=>
    {
      this.certif=data['content'];
      this.pages=new Array(data['totalPages']);
    }).catch((err)=>{
      console.log("erreur a afficher les certifs");
    })
  }
/*
  add(c:any){
    console.log(c.value)
    this.certifService.addCertif(JSON.stringify(c.value)).subscribe(
      (resp) => {
        console.log("sdfd,fkd")
        console.log(resp);
        this.toast.success({detail:"Félicitations",summary:'Certification ajoutée avec succés',duration:5000});
        this.afficher();
      },
      (err) => {
        console.log(err);
      }
    );
  }
*/
  add(c:NgForm){
    this.certifService.addCertif(c.value).subscribe(
      (resp) => {
        console.log(resp);
        this.toast.success({detail:"Félicitations",summary:'Certification ajoutée avec succés',duration:5000});
        this.afficher();
      },
      (err) => {
        console.log(err);
      }
    );
  }


  deleteCertif(id:any){
    this.confirmService.showConfirm("Vous voulez vraimenet supprimé la certification ? ",
      ()=>{
        this.certifService.deleteCertif(id).subscribe((res)=>{
          this.afficher()
          this.toast.success({detail:"Félicitations",summary:'Certification supprimée avec succés',duration:5000});

        })
      },
      ()=>{
      }
    )
  }


  edit(certif: any){
    this.certifToUpdate = certif;
  }
  updateCertif(){
    this.certifService.updateCertif(this.certifToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.toast.success({detail:"Félicitations",summary:'Certification modifiée avec succés',duration:5000});

      },
      (err) => {
        console.log(err);
      }
    );
  }






}
