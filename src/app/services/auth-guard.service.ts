import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService,
              public router: Router,
              public tokenStorageService: TokenStorageService) {
  }

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) return true;
    else {
      this.router.navigateByUrl('');
      return false;
    }
  }
}
