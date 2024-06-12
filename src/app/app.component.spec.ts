import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RequestHelperService } from './shared/services/utils/request-helper.service';
import { MockRequestHelperService } from './shared/services/utils/tests/mock-request-helper-service';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/ui/layout/layout.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterOutlet,
        LayoutComponent
      ],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService()}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
