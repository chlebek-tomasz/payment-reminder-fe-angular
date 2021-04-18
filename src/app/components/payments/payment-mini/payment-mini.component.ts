import { Payment } from './../../../models/Payment';
import { PaymentService } from './../../../services/payment/payment.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-mini',
  templateUrl: './payment-mini.component.html',
  styleUrls: ['./payment-mini.component.scss']
})
export class PaymentMiniComponent implements OnInit {

  payment: Payment = new Payment();
  isPayment: boolean = false;

  constructor(private service: PaymentService) { }

  ngOnInit(): void {
    this.getNearestPayment();
  }

  public getNearestPayment() {
    return this.service.getNearestPayment()
        .subscribe(data => {
          this.isPayment = true;
          this.payment = new Payment().deserialize(data);
        }, err => {
          this.isPayment = false;
          this.payment = new Payment();
        })
  }

}
