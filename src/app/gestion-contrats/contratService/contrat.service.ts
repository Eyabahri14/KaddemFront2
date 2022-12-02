import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  PATH_OF_API = 'http://localhost:8091';
  constructor(private httpclient: HttpClient) { }

  addContrat(formData: FormData) {
    return this.httpclient.post(this.PATH_OF_API+'/addContrat', formData);
  }

  GetAllContrat(){
    return this.httpclient.get(this.PATH_OF_API + '/Contrat');
  }
  deleteContrat(id: any)  {
    return this.httpclient.delete(this.PATH_OF_API + '/deleteContrat/'+id);
  }

  public updateContrat (contrat:any){
    return this.httpclient.put('http://localhost:8091/updateContrat', contrat);
  }
}
