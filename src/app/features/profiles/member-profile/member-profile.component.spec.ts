import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfileComponent } from './member-profile.component';
import { RequestHelperService } from '../../../shared/services/utils/request-helper.service';
import { MockRequestHelperService } from '../../../shared/services/utils/tests/mock-request-helper-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

describe('MemberProfileComponent', () => {
  let component: MemberProfileComponent;
  let fixture: ComponentFixture<MemberProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MemberProfileComponent,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { memberId: 1 } } } }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
