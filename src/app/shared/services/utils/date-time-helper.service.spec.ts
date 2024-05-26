import { TestBed } from '@angular/core/testing';

import { DateTimeHelperService } from './date-time-helper.service';

describe('DateTimeHelperService', () => {
  let service: DateTimeHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
