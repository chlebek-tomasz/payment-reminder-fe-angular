import { PaymentCategory } from './../../models/PaymentCategory';
import { UrlHelper } from './../../common/UrlHelper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentCategoryService {

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

  public getCategories(): Observable<any> {
    return this.httpClient.get<PaymentCategory[]>(UrlHelper.CATEGORIES, this.getHeaders());
  }
}
