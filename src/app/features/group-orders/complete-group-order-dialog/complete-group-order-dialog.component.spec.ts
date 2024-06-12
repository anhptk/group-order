import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteGroupOrderDialogComponent } from './complete-group-order-dialog.component';
import { RequestHelperService } from '../../../shared/services/utils/request-helper.service';
import { MockRequestHelperService } from '../../../shared/services/utils/tests/mock-request-helper-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GroupOrderInfoViewModel } from '../../../shared/models/view/group-order-info.view-model';
import { MockDialogRef } from '../../../shared/services/utils/tests/mock-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CompleteGroupOrderDialogComponent', () => {
  let component: CompleteGroupOrderDialogComponent;
  let fixture: ComponentFixture<CompleteGroupOrderDialogComponent>;

  let mockDialogData: GroupOrderInfoViewModel;

  beforeEach(() => {
    mockDialogData = new GroupOrderInfoViewModel({
      id: 1,
      createdAt: '2021-01-01T00:00:00',
      orders: []
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CompleteGroupOrderDialogComponent,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: MatDialogRef, useValue: new MockDialogRef() }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteGroupOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
