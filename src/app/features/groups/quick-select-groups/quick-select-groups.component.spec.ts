import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSelectGroupsComponent } from './quick-select-groups.component';
import { GroupService } from '../../../shared/services/api/group.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('QuickSelectGroupsComponent', () => {
  let component: QuickSelectGroupsComponent;
  let fixture: ComponentFixture<QuickSelectGroupsComponent>;

  let spyGroupService: Partial<jasmine.SpyObj<GroupService>>;

  beforeEach(() => {
    spyGroupService = {
      query: jasmine.createSpy('query').and.returnValue(of([]))
    }
  })


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickSelectGroupsComponent, RouterModule.forRoot([]), NoopAnimationsModule],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: GroupService, useValue: spyGroupService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickSelectGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
