import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderDialogComponent } from './create-order-dialog.component';
import { RequestHelperService } from '../../../shared/services/utils/request-helper.service';
import { MockRequestHelperService } from '../../../shared/services/utils/tests/mock-request-helper-service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockDialogRef } from '../../../shared/services/utils/tests/mock-dialog';
import { OrderInfoViewModel } from '../../../shared/models/view/order-info.view-model';

describe('CreateOrderDialogComponent', () => {
  let component: CreateOrderDialogComponent;
  let fixture: ComponentFixture<CreateOrderDialogComponent>;

  let mockDialogData: OrderInfoViewModel;

  beforeEach(()=> {
    mockDialogData = new OrderInfoViewModel({
      id: 1,
      createdAt: new Date(),
      isPaid: false,
      items: [],
      orderedBy: 'Test User',
      groupOrderId: 1
    });
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrderDialogComponent],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() },
        { provide: MatDialogRef, useValue: new MockDialogRef() },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
