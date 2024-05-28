import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOrdersDashboardComponent } from './group-orders-dashboard.component';

describe('GroupOrdersDashboardComponent', () => {
  let component: GroupOrdersDashboardComponent;
  let fixture: ComponentFixture<GroupOrdersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupOrdersDashboardComponent]
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
