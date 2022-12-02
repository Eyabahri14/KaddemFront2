import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PartenaireService} from "../partenaireService/partenaire.service";
import {Router} from "@angular/router";
import {Partenaire} from "../models/partenaire";

@Component({
  selector: 'app-partenaire-table',
  templateUrl: './partenaire-table.component.html',
  styleUrls: ['./partenaire-table.component.css']
})
export class PartenaireTableComponent implements OnInit {

  term:any;
  partenaire:any;
  partenairee:any;
  part:any;
  partenair:any;
  allpartenaire:any;
  @ViewChild('myform')form!:NgForm;
  partenaireToAdd=new Partenaire();

  partenaireToUpdate = {
    nomPartenaire:"",
    localisation:"",
    email:"",
    numTelPar:"",
    support:""
  }




  constructor(private partservice:PartenaireService , private router: Router) {
  }
  ngOnInit(): void {
    this.afficher();

  }


  afficher(){
    this.partservice.getpartenaire().toPromise().then((res:any)=>
    {
      console.log(res);
      this.partenaire=res;
    }).catch((err)=>{
      console.log("erreur a afficher les partenaires");
    })
  }




  getallP()
  {
    this.partservice.getpartenaire().subscribe(
      (d)=> this.partenaire=d
    )

  }




  add(c:NgForm){
    this.partservice.addpartenaire(c.value).subscribe(
      (resp) => {
        console.log(resp);
        this.afficher();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  TOpartenaire(){
    this.router.navigate(['partenaire'])
      .then(() => {
        window.location.reload();
      });

  }
  public deltePartenaire(partenaire_id:number){
    let resp= this.partservice.deletePartenaire(partenaire_id);
    resp.subscribe((d)=> this.getallP())
  }

  edit(partenaire: any){
    this.partenaireToUpdate = partenaire;
  }
  updatePartenaire(){
    this.partservice.updatePartenaire(this.partenaireToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }






}
