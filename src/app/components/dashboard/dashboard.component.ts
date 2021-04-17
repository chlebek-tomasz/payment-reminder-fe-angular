import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Payment } from 'src/app/models/Payment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  payments: Payment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onPaymentsChanged(values: Payment[]) {
    this.payments = values;
  }

}
