import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SigninRequest } from 'src/app/models/requests/SigninRequest';
import { LoginService } from 'src/app/services/auth/login.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MessageComponent } from '../../common/message/message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  model: SigninRequest;

  constructor(private dialog: MatDialog,
              private loginService: LoginService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (!this.isLoggedIn) {
    this.model = new SigninRequest();
    } else {
    this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(loginRequest) {
    this.loginService.login(loginRequest).subscribe(
      data => {
        this.dialog.closeAll();
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.snackBar.open('Logowanie zakończone sukcesem', 'Zamknij', {
          duration: 2000,
          panelClass: ['success']
        });
        this.router.navigate(['/dashboard'])
      },
      err => {
        this.isLoginFailed = true;
        this.snackBar.open('Logowanie nie powiodło się', 'Zamknij', {
          duration: 2000,
          panelClass: ['failure']
        });
        // this.dialog.open(MessageComponent, { data: {
        //   message: "Wrong data!"
        // }});
        
      } 
    );
  }

}
