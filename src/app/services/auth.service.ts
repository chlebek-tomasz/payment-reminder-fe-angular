import { TokenStorageService } from './token-storage.service';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public tokenStorageService: TokenStorageService) { }

  public isAuthenticated(): boolean {
    const token = this.tokenStorageService.getToken();
    if (token) return true;
    else return false;
  }

  public getUserId(): string {
    return this.tokenStorageService.getUser().Id;
  }
}
