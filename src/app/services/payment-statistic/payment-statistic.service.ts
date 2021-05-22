import {PaymentStatistic} from 'src/app/models/PaymentStatistic';
import {UrlHelper} from './../../common/UrlHelper';
import {AuthService} from './../auth.service';
import {TokenStorageService} from './../token-storage.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentStatisticService {

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

  public getPaymentsStatisticSinceTheBeginningOfMonthToNow(): Observable<any> {
    return this.httpClient.get<PaymentStatistic>(UrlHelper.PAYMENT_STATISCTIC + this.authService.getUserId() + '/since-beginning-month', this.getHeaders());
  }

  public getUpcomingPaymentsStatisticToTheEndOfMonth() {
    return this.httpClient.get<PaymentStatistic>(UrlHelper.PAYMENT_STATISCTIC + this.authService.getUserId() + '/upcoming', this.getHeaders());
  }
}
