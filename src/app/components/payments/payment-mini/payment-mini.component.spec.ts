import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMiniComponent } from './payment-mini.component';

describe('PaymentMiniComponent', () => {
  let component: PaymentMiniComponent;
  let fixture: ComponentFixture<PaymentMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
