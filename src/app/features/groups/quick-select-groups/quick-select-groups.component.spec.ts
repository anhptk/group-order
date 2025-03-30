import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSelectGroupsComponent } from './quick-select-groups.component';

describe('QuickSelectGroupsComponent', () => {
  let component: QuickSelectGroupsComponent;
  let fixture: ComponentFixture<QuickSelectGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickSelectGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickSelectGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
