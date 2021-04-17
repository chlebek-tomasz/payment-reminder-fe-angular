import { UrlHelper } from './../../common/UrlHelper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../token-storage.service';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  headerDict = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + this.tokenStorageService.getToken(),
  }
  
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private httpClient: HttpClient,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService) { }

  public getNearestPayment(): Observable<any> {
    return this.httpClient.get<Payment>(UrlHelper.PAYMENT_USER + this.authService.getUserId() + '/nearest', this.requestOptions);
  }


}
