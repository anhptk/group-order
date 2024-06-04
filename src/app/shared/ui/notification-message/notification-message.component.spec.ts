import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationMessageComponent } from './notification-message.component';
import { NOTIFICATION_TYPE_CONSTANTS, NotificationConfig } from './models/notification-config.model';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

describe('NotificationMessageComponent', () => {
  let component: NotificationMessageComponent;
  let fixture: ComponentFixture<NotificationMessageComponent>;
  let mockConfig: NotificationConfig;

  beforeEach(() => {
    mockConfig = {
      message: 'Test success',
      type: NOTIFICATION_TYPE_CONSTANTS.SUCCESS
    };
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationMessageComponent],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: mockConfig }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
