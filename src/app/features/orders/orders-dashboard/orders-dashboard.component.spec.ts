import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDashboardComponent } from './orders-dashboard.component';
import { RequestHelperService } from '../../../shared/services/utils/request-helper.service';
import { MockRequestHelperService } from '../../../shared/services/utils/tests/mock-request-helper-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OrdersDashboardComponent', () => {
  let component: OrdersDashboardComponent;
  let fixture: ComponentFixture<OrdersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        OrdersDashboardComponent,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() }
      ]
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
