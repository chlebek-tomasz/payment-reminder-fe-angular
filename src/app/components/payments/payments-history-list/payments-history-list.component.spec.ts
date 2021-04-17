import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsHistoryListComponent } from './payments-history-list.component';

describe('PaymentsHistoryListComponent', () => {
  let component: PaymentsHistoryListComponent;
  let fixture: ComponentFixture<PaymentsHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
