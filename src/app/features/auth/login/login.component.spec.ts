import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RequestHelperService } from '../../../shared/services/utils/request-helper.service';
import { MockRequestHelperService } from '../../../shared/services/utils/tests/mock-request-helper-service';
import { MatDialogRef } from '@angular/material/dialog';
import { MockDialog } from '../../../shared/services/utils/tests/mock-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() },
        { provide: MatDialogRef, useValue: new MockDialog() }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
