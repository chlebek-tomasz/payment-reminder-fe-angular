import { TestBed } from '@angular/core/testing';

import { PaymentCategoryService } from './payment-category.service';

describe('PaymentCategoryService', () => {
  let service: PaymentCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
