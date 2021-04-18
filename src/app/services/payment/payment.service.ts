import { PaymentRequest } from 'src/app/models/requests/PaymentRequest';
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

  public getHistoryListPayment(): Observable<any> {
    return this.httpClient.get<Payment>(UrlHelper.PAYMENT_USER + this.authService.getUserId() + '/history', this.requestOptions);
  }

  public getUserPayments() {
    return this.httpClient.get<Payment[]>(UrlHelper.PAYMENT_USER + this.authService.getUserId(), this.requestOptions);
  }

  public postNewPayment(request: PaymentRequest) {
    return this.httpClient.post(UrlHelper.PAYMENT, request, this.requestOptions);
  }

  public changePaymentStatusToPaid(id: string) {
    return this.httpClient.get(UrlHelper.PAYMENT + id + '/paid', this.requestOptions);
  }

  public deletePayment(id: string) {
    return this.httpClient.delete(UrlHelper.PAYMENT + id, this.requestOptions);
  }

  public editPayment(id: string, request: PaymentRequest) {
    return this.httpClient.put(UrlHelper.PAYMENT + id, request, this.requestOptions);
  }


}
