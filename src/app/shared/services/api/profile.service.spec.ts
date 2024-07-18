import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { RequestHelperService } from '../utils/request-helper.service';
import { MockRequestHelperService } from '../utils/tests/mock-request-helper-service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfileService,
        { provide: RequestHelperService, useValue: new MockRequestHelperService()}
      ]
    });
    service = TestBed.inject(ProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
