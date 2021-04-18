import { EditPaymentComponent } from './../edit-payment/edit-payment.component';
import { PaymentService } from './../../../services/payment/payment.service';
import { Payment } from './../../../models/Payment';
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit, OnChanges {

  @Input('payments') paymentsInput: Payment[];

  payments: Payment[] = [];
  showEditableButtons: boolean = false;
  dataSource: Payment[] = [];
  displayedColumns: string[] = ['Tytuł', 'Odbiorca', 'Nr bankowy odbiorcy', 'Kwota', 'Termin'];

  constructor(private service: PaymentService,
              private url: LocationStrategy,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.url.path() === '/payments') {
      this.showEditableButtons = true;
      this.displayedColumns.push('Zapłacone', 'Edytuj', 'Usuń');
      this.service.getUserPayments().subscribe(
        data => {
          for (let d of data)
            this.payments.push(new Payment().deserialize(d));
          this.dataSource = this.payments;
        }
      );
    } else if (this.url.path() === '/payments-history') {
      this.service.getHistoryListPayment().subscribe(
        data => {
          for (let d of data)
            this.payments.push(new Payment().deserialize(d));
          this.dataSource = this.payments;
        }
      );
    } else {
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
      this.snackBar.open('Zmieniono status', 'Close', {
        duration: 2000,
        panelClass: ['success']
      });
    }, err => {
      this.snackBar.open('Wystąpił błąd przy zmianie statusu', 'Close', {
        duration: 2000,
        panelClass: ['failure']
      });
    });
  }

  deletePayment(id: string): void {
    this.service.deletePayment(id).subscribe(data => {
      this.ngOnInit();
      this.snackBar.open('Usunięto płatmość', 'Close', {
        duration: 2000,
        panelClass: ['success']
      });
    }, err => {
      this.snackBar.open('Wystąpił błąd przy usuwaniu płatności', 'Close', {
        duration: 2000,
        panelClass: ['failure']
      });
    });
  }

  public openEditForm(element: Payment) {
    this.dialog.open(EditPaymentComponent, {data: {element}});
  }

}
