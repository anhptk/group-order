import { TestBed } from '@angular/core/testing';

import { GroupOrderInfoService } from './group-order-info.service';
import { RequestHelperService } from '../utils/request-helper.service';
import { MockRequestHelperService } from '../utils/tests/mock-request-helper-service';

describe('GroupOrderInfoService', () => {
  let service: GroupOrderInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GroupOrderInfoService,
        { provide: RequestHelperService, useValue: new MockRequestHelperService() }
      ]
    });
    service = TestBed.inject(GroupOrderInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
