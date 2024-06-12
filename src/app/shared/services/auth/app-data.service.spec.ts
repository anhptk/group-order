import { TestBed } from '@angular/core/testing';

import { AppDataService } from './app-data.service';
import { RequestHelperService } from '../utils/request-helper.service';
import { MockRequestHelperService } from '../utils/tests/mock-request-helper-service';

describe('AppDataService', () => {
  let service: AppDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppDataService,
        { provide: RequestHelperService, useValue: new MockRequestHelperService() }
      ]
    });
    service = TestBed.inject(AppDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
