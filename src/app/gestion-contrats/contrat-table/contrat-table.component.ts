import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {OffreService} from "../../gestion-offres/offreService/offre.service";
import {Router} from "@angular/router";
import {ContratService} from "../contratService/contrat.service";

@Component({
  selector: 'app-contrat-table',
  templateUrl: './contrat-table.component.html',
  styleUrls: ['./contrat-table.component.css']
})
export class ContratTableComponent implements OnInit {

  term:any;
  contrat:any;

  @ViewChild('myform')form!:NgForm;


  contratToUpdate = {
    dateDebutContrat:"",
    dateFinContrat:"",
    specialite:"",
    archive:"",
    montantContrat:""
  }




  constructor(private contratService:ContratService , private router: Router) {
  }
  ngOnInit(): void {
    this.afficher();

  }


  afficher(){
    this.contratService.GetAllContrat().toPromise().then((res:any)=>
    {
      console.log(res);
      this.contrat=res;
    }).catch((err)=>{
      console.log("erreur a afficher les contrats");
    })
  }




  add(c:NgForm){
    this.contratService.addContrat(c.value).subscribe(
      (resp) => {
        console.log(resp);
        this.afficher();
      },
      (err) => {
        console.log(err);
      }
    );
  }


  public deleteContrat(id:number){
    let resp= this.contratService.deleteContrat(id);
    resp.subscribe((d)=> this.afficher())
  }

  edit(contrat: any){
    this.contratToUpdate = contrat;
  }
  updateContrat(){
    this.contratService.updateContrat(this.contratToUpdate).subscribe(
      (resp) => {

        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }




}
