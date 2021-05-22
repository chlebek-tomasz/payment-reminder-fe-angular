import {element} from 'protractor';
import {PaymentCategory} from './../../../models/PaymentCategory';
import {PaymentCategoryService} from './../../../services/payment/payment-category.service';
import {PaymentService} from './../../../services/payment/payment.service';
import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {TokenStorageService} from 'src/app/services/token-storage.service';
import {PaymentRequest} from 'src/app/models/requests/PaymentRequest';

@Component({
  selector: 'app-add-payments',
  templateUrl: './add-payments.component.html',
  styleUrls: ['./add-payments.component.scss']
})
export class AddPaymentsComponent implements OnInit {

  model: PaymentRequest;
  paymentCategories: PaymentCategory[] = [];
  isLoggedIn = false;

  constructor(private dialog: MatDialog,
              private paymentService: PaymentService,
              private paymentCategoryService: PaymentCategoryService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.model = new PaymentRequest();
      this.paymentCategoryService.getCategories().subscribe(data => {
        this.paymentCategories = data;
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  onSubmit(paymentRequest) {
    this.paymentService.postNewPayment(paymentRequest).subscribe(data => {
        this.dialog.closeAll();
        this.snackBar.open('Dodano płatność', 'Zamknij', {
          duration: 2000,
          panelClass: ['success']
        });
        this.router.navigate(['/payments']);
      },
      err => {
        this.snackBar.open('Wystąpił błąd, spróbuj ponownie', 'Zamknij', {
          duration: 2000,
          panelClass: ['failure']
        });
      })
  }

}
