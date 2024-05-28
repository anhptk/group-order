import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOrdersTableComponent } from './group-orders-table.component';

describe('GroupOrdersTableComponent', () => {
  let component: GroupOrdersTableComponent;
  let fixture: ComponentFixture<GroupOrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupOrdersTableComponent]
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
