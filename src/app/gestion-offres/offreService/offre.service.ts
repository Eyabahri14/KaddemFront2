import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  PATH_OF_API = 'http://localhost:8091';
  constructor(private httpclient: HttpClient) { }

  addOffre(formData: FormData) {
    return this.httpclient.post(this.PATH_OF_API+'/OffreC/addOffre', formData);
  }

  getallOffre(){
    return this.httpclient.get(this.PATH_OF_API + '/OffreC/');
  }
  deleteoffre(idOffre: number)  {
    return this.httpclient.delete(this.PATH_OF_API + '/OffreC/deleteOffre/'+idOffre);
  }

  public updateOffer (offre:any){
    return this.httpclient.put('http://localhost:8091/OffreC/updateOffre', offre);
  }
}
