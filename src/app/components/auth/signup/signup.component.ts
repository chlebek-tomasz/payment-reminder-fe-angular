import { LoginComponent } from './../login/login.component';
import { SignupService } from './../../../services/auth/signup.service';
import { SignupRequest } from './../../../models/requests/SignupRequest';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  model: SignupRequest;
  isSuccessful = false;
  isLoggedIn: boolean;

  constructor(private dialog: MatDialog,
              private signupService: SignupService,
              private tokenStorage: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (!this.isLoggedIn) {
      this.model = new SignupRequest();
    } else {
      this.router.navigate(['/dashboard']);
    }
    
  }

  onSubmit(signupRequest) {
    this.signupService.signup(signupRequest).subscribe(
      data => {
        this.dialog.closeAll();
        this.isSuccessful = true;
        this.dialog.open(LoginComponent);
      },
      err => {
        const json = JSON.parse(err.error);
        this.isSuccessful = false;
      }
    )
  }

}
