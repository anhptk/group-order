import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RequestHelperService } from './shared/services/utils/request-helper.service';
import { MockRequestHelperService } from './shared/services/utils/tests/mock-request-helper-service';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/ui/layout/layout.component';
import { AuthService } from '@auth0/auth0-angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterOutlet,
        LayoutComponent
      ],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService()},
        { provide: AuthService, useValue: {}}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
