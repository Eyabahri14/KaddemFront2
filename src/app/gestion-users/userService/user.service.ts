import { Injectable } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = 'http://localhost:8091';
  host :string = "http://localhost:8091";

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private httpclient: HttpClient, private userAuthService: AuthService ) {}

  public login(loginData:any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles:any): boolean{
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
// something like this.
    return isMatch;
  }


  public GetAllUsers() : Observable<string[]> {
    return this.httpclient.get<string[]>(this.PATH_OF_API +'/users');
  }



  deleteUser(id: any): Observable<any> {
    return this.httpclient.delete(`${this.PATH_OF_API}/delete/${id}`, { responseType: 'text' });
  }


  adduser(formData: FormData) : Observable<any> {
    return this.httpclient.post(this.PATH_OF_API + '/registerNewUser', formData)
  }

  PaginationUsers(page: number){
    return this.httpclient.get(this.PATH_OF_API + '/list?page='+page);
  }

  generatePdfList(){
    return this.httpclient.get(this.PATH_OF_API +'/pdf', {responseType:'blob'});
  }


  detailUser(userName: any) {
    return this.httpclient.get(this.PATH_OF_API + '/getUser/' + userName)
  }

  UpdateUser(user:any,userName: any) {
    return this.httpclient.put(this.PATH_OF_API + '/updateUser/' + userName,user)
  }



}
