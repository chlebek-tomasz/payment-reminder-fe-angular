import { ChangeUserDetailsRequest } from './../../../models/requests/ChangeUserDetailsRequest';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-change-data',
  templateUrl: './change-data.component.html',
  styleUrls: ['./change-data.component.scss']
})
export class ChangeDataComponent implements OnInit {

  isLoggedIn = false;
  model: ChangeUserDetailsRequest;

  constructor(private dialog: MatDialog,
              private userService: UserService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.model = new ChangeUserDetailsRequest();
    } else {
      this.router.navigate(['']);
    }
  }

  onSubmit(request) {
    this.userService.changeUserDetails(request).subscribe(
      data => {
        this.dialog.closeAll();
        this.snackBar.open('Dane zmienione!', 'Zamknij', {
          duration: 2000,
          panelClass: ['success']
        });
      },
      err => {
        this.snackBar.open('Próba zmiany danych nie powiodła się! Spróbuj ponownie!', 'Zamknij', {
          duration: 2000,
          panelClass: ['failure']
        });
      } 
    );
  }

}
