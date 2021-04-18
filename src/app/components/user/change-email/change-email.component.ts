import { ChangeEmailRequest } from './../../../models/requests/ChangeEmailRequest';
import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent implements OnInit {

  isLoggedIn = false;
  model: ChangeEmailRequest;

  constructor(private dialog: MatDialog,
              private userService: UserService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.model = new ChangeEmailRequest();
    } else {
      this.router.navigate(['/']);
    }
  }

  onSubmit(request) {
    this.userService.changeUserEmail(request).subscribe(
      data => {
        this.dialog.closeAll();
        this.isLoggedIn = false;
        this.tokenStorage.signOut();
        this.router.navigateByUrl('');
        this.snackBar.open('Email zmieniony! Zaloguj się ponownie z nowym emailem!', 'Zamknij', {
          duration: 2000,
          panelClass: ['success']
        });
      },
      err => {
        this.snackBar.open('Próba zmiany emaila nie powiodła się! Spróbuj ponownie!', 'Zamknij', {
          duration: 2000,
          panelClass: ['failure']
        });
      } 
    );
  }

}
