import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupDialogComponent } from './create-group-dialog.component';
import { GroupService } from '../../../shared/services/api/group.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateGroupDialogComponent', () => {
  let component: CreateGroupDialogComponent;
  let fixture: ComponentFixture<CreateGroupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGroupDialogComponent, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: GroupService, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
