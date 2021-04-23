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

  constructor(private httpClient: HttpClient,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService) { }
    
  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.tokenStorageService.getToken(),
      }),
    };
  }

  public getNearestPayment(): Observable<any> {
    return this.httpClient.get<Payment>(UrlHelper.PAYMENT_USER + this.authService.getUserId() + '/nearest', this.getHeaders());
  }

  public getHistoryListPayment(categoryId?: string): Observable<any> {
    let url: string = UrlHelper.PAYMENT_USER + this.authService.getUserId() + '/history';
    if (categoryId != null) {
      url += '?categoryId=' + categoryId;
    }
    return this.httpClient.get<Payment>(url, this.getHeaders());
  }

  public getUserPayments(categoryId?: string) {
    let url: string = UrlHelper.PAYMENT_USER + this.authService.getUserId() + '/history';
    if (categoryId != null) {
      url += '?categoryId=' + categoryId;
    }
    return this.httpClient.get<Payment[]>(url, this.getHeaders());
  }

  public postNewPayment(request: PaymentRequest) {
    return this.httpClient.post(UrlHelper.PAYMENT, request, this.getHeaders());
  }

  public changePaymentStatusToPaid(id: string) {
    return this.httpClient.get(UrlHelper.PAYMENT + id + '/paid', this.getHeaders());
  }

  public deletePayment(id: string) {
    return this.httpClient.delete(UrlHelper.PAYMENT + id, this.getHeaders());
  }

  public editPayment(id: string, request: PaymentRequest) {
    return this.httpClient.put(UrlHelper.PAYMENT + id, request, this.getHeaders());
  }


}
