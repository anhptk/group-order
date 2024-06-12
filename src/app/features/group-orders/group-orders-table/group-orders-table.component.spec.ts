import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOrdersTableComponent } from './group-orders-table.component';
import { RequestHelperService } from '../../../shared/services/utils/request-helper.service';
import { MockRequestHelperService } from '../../../shared/services/utils/tests/mock-request-helper-service';

describe('GroupOrdersTableComponent', () => {
  let component: GroupOrdersTableComponent;
  let fixture: ComponentFixture<GroupOrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupOrdersTableComponent],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
