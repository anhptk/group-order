import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteGroupOrderDialogComponent } from './complete-group-order-dialog.component';

describe('CompleteGroupOrderDialogComponent', () => {
  let component: CompleteGroupOrderDialogComponent;
  let fixture: ComponentFixture<CompleteGroupOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteGroupOrderDialogComponent]
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
