import { TokenStorageService } from './../../../services/token-storage.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/login/login.component';
import { SignupComponent } from '../../auth/signup/signup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private tokenStorage: TokenStorageService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isLoggedIn = !!this.tokenStorage.getToken();
      }
    })
  }
  
  public openLoginForm() {
    this.dialog.open(LoginComponent);
  }

  public openRegisterForm() {
    this.dialog.open(SignupComponent);
  }

  public signOut() {
    this.router.navigate(['/']);
    this.tokenStorage.signOut();
  }

}
