import { AddPaymentsComponent } from './../../payments/add-payments/add-payments.component';
import { TokenStorageService } from './../../../services/token-storage.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/login/login.component';
import { SignupComponent } from '../../auth/signup/signup.component';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedIn: boolean = false;
  showPlusButton: boolean = false;

  constructor(private tokenStorage: TokenStorageService,
              private dialog: MatDialog,
              private router: Router,
              private url: LocationStrategy) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isLoggedIn = !!this.tokenStorage.getToken();
        if (this.url.path() === '/payments') {
          this.showPlusButton = true;
        }
        else this.showPlusButton = false;
      }
    })
  }
  
  public openLoginForm() {
    this.dialog.open(LoginComponent);
  }

  public openRegisterForm() {
    this.dialog.open(SignupComponent);
  }

  public openPaymentForm() {
    this.dialog.open(AddPaymentsComponent);
  }

  public signOut() {
    this.router.navigate(['/']);
    this.tokenStorage.signOut();
  }

}
