import { TestBed } from '@angular/core/testing';

import { GroupService } from './group.service';
import { RequestHelperService } from '../utils/request-helper.service';
import { MockRequestHelperService } from '../utils/tests/mock-request-helper-service';

describe('GroupService', () => {
  let service: GroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GroupService,
        { provide: RequestHelperService, useValue: new MockRequestHelperService() }
      ]
    });
    service = TestBed.inject(GroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
