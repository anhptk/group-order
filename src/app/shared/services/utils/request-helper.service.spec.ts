import { TestBed } from '@angular/core/testing';

import { RequestHelperService } from './request-helper.service';

describe('RequestHelperService', () => {
  let service: RequestHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
