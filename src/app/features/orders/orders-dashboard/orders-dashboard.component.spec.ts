import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDashboardComponent } from './orders-dashboard.component';

describe('OrdersDashboardComponent', () => {
  let component: OrdersDashboardComponent;
  let fixture: ComponentFixture<OrdersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
