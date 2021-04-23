import { EditPaymentComponent } from './../edit-payment/edit-payment.component';
import { PaymentService } from './../../../services/payment/payment.service';
import { Payment } from './../../../models/Payment';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PaymentCategory } from 'src/app/models/PaymentCategory';
import { PaymentCategoryService } from 'src/app/services/payment/payment-category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit, OnChanges {

  @Input('payments') paymentsInput: Payment[];

  payments: Payment[] = [];
  showEditableButtons: boolean = false;
  showCategoryChooseInput: boolean = true;
  dataSource: Payment[] = [];
  paymentCategories: PaymentCategory[] = [];
  displayedColumns: string[] = ['Tytuł', 'Odbiorca', 'Nr bankowy odbiorcy', 'Kategoria', 'Kwota', 'Termin'];

  constructor(private service: PaymentService,
              private url: LocationStrategy,
              private paymentCategoryService: PaymentCategoryService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.url.path() === '/payments') {
      this.showEditableButtons = true;
      this.showCategoryChooseInput = true;
      if (this.displayedColumns.indexOf('Zapłacone') < 0) this.displayedColumns.push('Zapłacone');
      if (this.displayedColumns.indexOf('Edytuj') < 0) this.displayedColumns.push('Edytuj');
      if (this.displayedColumns.indexOf('Usuń') < 0) this.displayedColumns.push('Usuń');
      this.paymentCategoryService.getCategories().subscribe(data => {
        this.paymentCategories = data;
      });
      this.service.getUserPayments().subscribe(
        data => {
          for (let d of data)
            this.payments.push(new Payment().deserialize(d));
          this.dataSource = this.payments;
        }
      );
    } else if (this.url.path() === '/payments-history') {
      this.showCategoryChooseInput = true;
      this.paymentCategoryService.getCategories().subscribe(data => {
        this.paymentCategories = data;
      });
      this.service.getHistoryListPayment().subscribe(
        data => {
          for (let d of data)
            this.payments.push(new Payment().deserialize(d));
          this.dataSource = this.payments;
        }
      );
    } else {
      this.showCategoryChooseInput = false;
      this.dataSource = this.paymentsInput;
    }
  }

  ngOnChanges(): void {
    if (this.url.path() === '/dashboard')
      this.dataSource = this.paymentsInput;
    else this.dataSource = this.payments;
  }

  changeStatusToPaid(id: string): void {
    this.service.changePaymentStatusToPaid(id).subscribe(data => {
      this.ngOnInit();
      this.snackBar.open('Zmieniono status', 'Zamknij', {
        duration: 2000,
        panelClass: ['success']
      });
    }, err => {
      this.snackBar.open('Wystąpił błąd przy zmianie statusu', 'Zamknij', {
        duration: 2000,
        panelClass: ['failure']
      });
    });
  }

  deletePayment(id: string): void {
    this.service.deletePayment(id).subscribe(data => {
      this.ngOnInit();
      this.snackBar.open('Usunięto płatmość', 'Zamknij', {
        duration: 2000,
        panelClass: ['success']
      });
    }, err => {
      this.snackBar.open('Wystąpił błąd przy usuwaniu płatności', 'Zamknij', {
        duration: 2000,
        panelClass: ['failure']
      });
    });
  }

  public openEditForm(element: Payment) {
    this.dialog.open(EditPaymentComponent, {data: {element}});
  }

  public onSubmit(input: any) {
    this.dataSource = [];
    this.payments = [];
    if (this.url.path() === '/payments') {
      this.service.getUserPayments(input).subscribe(
        data => {
          for (let d of data)
            this.payments.push(new Payment().deserialize(d));
          this.dataSource = this.payments;
        }
      );
    } else if (this.url.path() === '/payments-history') {
      this.service.getHistoryListPayment(input).subscribe(
        data => {
          for (let d of data)
            this.payments.push(new Payment().deserialize(d));
          this.dataSource = this.payments;
        }
      );
    }
  }

}
