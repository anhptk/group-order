import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDisplayComponent } from './member-display.component';

describe('MemberDisplayComponent', () => {
  let component: MemberDisplayComponent;
  let fixture: ComponentFixture<MemberDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
