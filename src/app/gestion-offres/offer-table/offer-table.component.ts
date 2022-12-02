import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Partenaire} from "../../gestion-partenaires/models/partenaire";
import {PartenaireService} from "../../gestion-partenaires/partenaireService/partenaire.service";
import {Router} from "@angular/router";
import {OffreService} from "../offreService/offre.service";

@Component({
  selector: 'app-offer-table',
  templateUrl: './offer-table.component.html',
  styleUrls: ['./offer-table.component.css']
})
export class OfferTableComponent implements OnInit {

  term:any;
  offre:any;

  @ViewChild('myform')form!:NgForm;


  offreToUpdate = {
    nomOffre:"",
    descriptionOffre:"",
    typeOffre:""
  }




  constructor(private offreService:OffreService , private router: Router) {
  }
  ngOnInit(): void {
    this.afficher();

  }


  afficher(){
    this.offreService.getallOffre().toPromise().then((res:any)=>
    {
      console.log(res);
      this.offre=res;
    }).catch((err)=>{
      console.log("erreur a afficher les offres");
    })
  }




  add(c:NgForm){
    this.offreService.addOffre(c.value).subscribe(
      (resp) => {
        console.log(resp);
        this.afficher();
      },
      (err) => {
        console.log(err);
      }
    );
  }


  public deleteOffre(id:number){
    let resp= this.offreService.deleteoffre(id);
    resp.subscribe((d)=> this.afficher())
  }

  edit(offre: any){
    this.offreToUpdate = offre;
  }
  updateOffre(){
    this.offreService.updateOffer(this.offreToUpdate).subscribe(
      (resp) => {

        console.log("tetetetet")
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }





}
