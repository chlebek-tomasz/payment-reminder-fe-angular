import { ChangePasswordRequest } from './../../../models/requests/ChangePasswordRequest';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  isLoggedIn = false;
  model: ChangePasswordRequest;

  constructor(private dialog: MatDialog,
              private userService: UserService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.model = new ChangePasswordRequest();
    } else {
      this.router.navigate(['']);
    }
  }

  onSubmit(request) {
    this.userService.changeUserPassword(request).subscribe(
      data => {
        this.dialog.closeAll();
        this.snackBar.open('Hasło zmienione!', 'Zamknij', {
          duration: 2000,
          panelClass: ['success']
        });
      },
      err => {
        this.snackBar.open('Próba zmiany hasła nie powiodła się! Spróbuj ponownie!', 'Zamknij', {
          duration: 2000,
          panelClass: ['failure']
        });
      } 
    );
  }

}
