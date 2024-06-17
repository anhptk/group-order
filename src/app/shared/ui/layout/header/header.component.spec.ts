import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RequestHelperService } from '../../../services/utils/request-helper.service';
import { MockRequestHelperService } from '../../../services/utils/tests/mock-request-helper-service';
import { AuthService } from '@auth0/auth0-angular';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() },
        { provide: AuthService, useValue: {} }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
