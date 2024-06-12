import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOrdersDashboardComponent } from './group-orders-dashboard.component';
import { MockRequestHelperService } from '../../../shared/services/utils/tests/mock-request-helper-service';
import { RequestHelperService } from '../../../shared/services/utils/request-helper.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GroupOrdersDashboardComponent', () => {
  let component: GroupOrdersDashboardComponent;
  let fixture: ComponentFixture<GroupOrdersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GroupOrdersDashboardComponent,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupOrdersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
