import { TestBed } from '@angular/core/testing';

import { SecurityService } from './sercurity.service';
import { RequestHelperService } from '../utils/request-helper.service';
import { MockRequestHelperService } from '../utils/tests/mock-request-helper-service';

describe('SecurityService', () => {
  let service: SecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SecurityService,
        { provide: RequestHelperService, useValue: new MockRequestHelperService()}
      ]
    });
    service = TestBed.inject(SecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
