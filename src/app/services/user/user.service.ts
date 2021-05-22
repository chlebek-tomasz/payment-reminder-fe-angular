import {ChangeUserDetailsRequest} from './../../models/requests/ChangeUserDetailsRequest';
import {ChangePasswordRequest} from './../../models/requests/ChangePasswordRequest';
import {UrlHelper} from './../../common/UrlHelper';
import {ChangeEmailRequest} from './../../models/requests/ChangeEmailRequest';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';
import {TokenStorageService} from '../token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService) {
  }

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.tokenStorageService.getToken(),
      }),
    };
  }

  public changeUserEmail(request: ChangeEmailRequest) {
    return this.httpClient.post(UrlHelper.USER + this.authService.getUserId() + '/change-email', request, this.getHeaders());
  }

  public changeUserPassword(request: ChangePasswordRequest) {
    return this.httpClient.post<any>(UrlHelper.USER + this.authService.getUserId() + '/change-password', request, this.getHeaders());
  }

  public changeUserDetails(request: ChangeUserDetailsRequest) {
    return this.httpClient.post(UrlHelper.USER + this.authService.getUserId() + '/change-details', request, this.getHeaders());
  }
}
