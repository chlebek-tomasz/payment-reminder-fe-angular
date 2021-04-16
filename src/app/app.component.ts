import { User } from './models/User';
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'payment-reminder-fe-angular';
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              private url: LocationStrategy) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }
}
