import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDisplayComponent } from './member-display.component';
import { RouterModule } from '@angular/router';

describe('MemberDisplayComponent', () => {
  let component: MemberDisplayComponent;
  let fixture: ComponentFixture<MemberDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MemberDisplayComponent,
        RouterModule
      ]
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
