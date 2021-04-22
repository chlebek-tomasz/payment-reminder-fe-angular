import { UrlHelper } from './../../common/UrlHelper';
import { SigninRequest } from './../../models/requests/SigninRequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(signinRequest: SigninRequest): Observable<any> {
    return this.httpClient.post(UrlHelper.SIGNIN, signinRequest).pipe();
  }
}
