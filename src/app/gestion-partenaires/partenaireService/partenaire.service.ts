import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Partenaire} from "../models/partenaire";

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  PATH_OF_API = 'http://localhost:8091';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private httpclient: HttpClient) {}


  public getpartenaire(){
    return this.httpclient.get(this.PATH_OF_API + '/PartenaireC/');
  }
  addpartenaire(formData: FormData) {
    return this.httpclient.post(this.PATH_OF_API+'/PartenaireC/addPartenaire', formData);
  }
  deletePartenaire(partenaire_id: number)  {
    return this.httpclient.delete(this.PATH_OF_API + '/PartenaireC/deletePartenaire/'+partenaire_id);
  }
  updatePartenaire(partenairee:any){
    return this.httpclient.put(this.PATH_OF_API + '/PartenaireC/updatePartenaire', partenairee);
  }

  getpartenairebyid(partenaire_id: number){
    return this.httpclient.get(this.PATH_OF_API + '/PartenaireC/retrieve-partenaire/'+partenaire_id);
  }


}
