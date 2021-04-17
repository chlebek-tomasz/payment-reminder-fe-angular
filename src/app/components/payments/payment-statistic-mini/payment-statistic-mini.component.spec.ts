import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatisticMiniComponent } from './payment-statistic-mini.component';

describe('PaymentStatisticMiniComponent', () => {
  let component: PaymentStatisticMiniComponent;
  let fixture: ComponentFixture<PaymentStatisticMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatisticMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatisticMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
