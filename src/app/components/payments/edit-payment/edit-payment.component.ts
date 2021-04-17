import { Payment } from './../../../models/Payment';
import { element } from 'protractor';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { PaymentRequest } from 'src/app/models/requests/PaymentRequest';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.scss']
})
export class EditPaymentComponent implements OnInit {

  model: PaymentRequest;
  payment: Payment;
  isLoggedIn = false;

  constructor(private dialog: MatDialog,
              private paymentService: PaymentService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public  data:  any) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.model = new PaymentRequest();
      this.payment = this.data.element;
      this.model.title = this.payment.Title;
      this.model.recipientAccountNumber = this.payment.RecipientAccountNumber;
    } else {
    this.router.navigate(['/']);
    }
  }

  onSubmit(paymentRequest) {
    this.paymentService.editPayment(this.payment.Id, paymentRequest).subscribe(data => {
      this.dialog.closeAll();
      this.snackBar.open('Login success', 'Close', {
        duration: 2000,
        panelClass: ['success']
      });
      this.router.navigate(['/payments']);
    }, 
    err => {
      this.snackBar.open('Post failed', 'Close', {
        duration: 2000,
        panelClass: ['failure']
      });
    })
  }

}
