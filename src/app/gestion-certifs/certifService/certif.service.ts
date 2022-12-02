import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CertifService {

  PATH_OF_API = 'http://localhost:8091';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpclient: HttpClient) { }

  addCertif(formData: FormData) : Observable<any> {
    return this.httpclient.post(this.PATH_OF_API + '/addCertif', formData)
  }

  public GetAllCertifs() : Observable<string[]> {
    return this.httpclient.get<string[]>(this.PATH_OF_API +'/certifs');
  }

  deleteCertif(id: number): Observable<any> {
    return this.httpclient.delete(`${this.PATH_OF_API}/deleteCertif/${id}`, { responseType: 'text' });
  }


  public updateCertif(certif: any) {
    return this.httpclient.put(this.PATH_OF_API + '/updateCertif', certif);
  }

  PaginationCertifs(page: number){
    return this.httpclient.get(this.PATH_OF_API + '/certifs?page='+page);
  }


}
