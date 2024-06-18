import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { RequestHelperService } from '../../services/utils/request-helper.service';
import { MockRequestHelperService } from '../../services/utils/tests/mock-request-helper-service';
import { AuthService } from '@auth0/auth0-angular';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() },
        { provide: AuthService, useValue: {} }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
