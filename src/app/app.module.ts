import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessageComponent } from './components/common/message/message.component';
import { PaymentMiniComponent } from './components/payments/payment-mini/payment-mini.component';
import { PaymentStatisticMiniComponent } from './components/payments/payment-statistic-mini/payment-statistic-mini.component';
import { PaymentsListComponent } from './components/payments/payments-list/payments-list.component';
import { PaymentsHistoryListComponent } from './components/payments/payments-history-list/payments-history-list.component';
import { UserComponent } from './components/user/user.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { AddPaymentsComponent } from './components/payments/add-payments/add-payments.component';
import { EditPaymentComponent } from './components/payments/edit-payment/edit-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingPageComponent,
    DashboardComponent,
    MessageComponent,
    NavBarComponent,
    PaymentMiniComponent,
    PaymentStatisticMiniComponent,
    PaymentsListComponent,
    PaymentsHistoryListComponent,
    UserComponent,
    AddPaymentsComponent,
    EditPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
