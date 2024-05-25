import { TestBed } from '@angular/core/testing';

import { GroupOrderInfoService } from './group-order-info.service';

describe('GroupOrderInfoService', () => {
  let service: GroupOrderInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupOrderInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
