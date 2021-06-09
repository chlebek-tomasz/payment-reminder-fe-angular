import { PaymentStatistic } from './../../../models/PaymentStatistic';
import { PaymentStatisticService } from './../../../services/payment-statistic/payment-statistic.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/Payment';

@Component({
  selector: 'app-payment-statistic-mini',
  templateUrl: './payment-statistic-mini.component.html',
  styleUrls: ['./payment-statistic-mini.component.scss']
})
export class PaymentStatisticMiniComponent implements OnInit {

  @Output() payments = new EventEmitter<Payment[]>();

  paymentStatistic: PaymentStatistic = new PaymentStatistic();

  constructor(private service: PaymentStatisticService) { }

  ngOnInit(): void {
    this.getPaymentsStatisticSinceTheBeginningOfMonthToNow();
  }

  public getPaymentsStatisticSinceTheBeginningOfMonthToNow() {
    return this.service.getPaymentsStatisticSinceTheBeginningOfMonthToNow()
      .subscribe(data => {
        console.log(data);
        this.paymentStatistic = new PaymentStatistic().deserialize(data);
        this.payments.emit(this.paymentStatistic.Payments);
      })
  }

}
