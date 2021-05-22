import {UrlHelper} from './../../common/UrlHelper';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignupRequest} from 'src/app/models/requests/SignupRequest';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) {
  }

  signup(signupRequest: SignupRequest) {
    return this.httpClient.post(UrlHelper.SIGNUP, signupRequest);
  }
}
