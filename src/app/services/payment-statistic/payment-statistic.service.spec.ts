import {TestBed} from '@angular/core/testing';

import {PaymentStatisticService} from './payment-statistic.service';

describe('PaymentStatisticService', () => {
  let service: PaymentStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
