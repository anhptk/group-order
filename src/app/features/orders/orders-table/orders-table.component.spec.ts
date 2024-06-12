import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTableComponent } from './orders-table.component';
import { MockRequestHelperService } from '../../../shared/services/utils/tests/mock-request-helper-service';
import { RequestHelperService } from '../../../shared/services/utils/request-helper.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OrdersTableComponent', () => {
  let component: OrdersTableComponent;
  let fixture: ComponentFixture<OrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        OrdersTableComponent,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
