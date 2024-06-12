import { TestBed } from '@angular/core/testing';

import { RequestHelperService } from './request-helper.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('RequestHelperService', () => {
  let service: RequestHelperService;

  let spyHttpClient: Partial<jasmine.SpyObj<HttpClient>>;

  beforeEach(() => {
    spyHttpClient = {
      get: jasmine.createSpy<any>(),
      post: jasmine.createSpy<any>(),
      patch: jasmine.createSpy<any>(),
      put: jasmine.createSpy<any>(),
      delete: jasmine.createSpy<any>(),
    };
    spyHttpClient.get.and.returnValue(of({}));
    spyHttpClient.post.and.returnValue(of({}));
    spyHttpClient.patch.and.returnValue(of({}));
    spyHttpClient.put.and.returnValue(of({}));
    spyHttpClient.delete.and.returnValue(of({}));
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestHelperService,
        { provide: HttpClient, useValue: spyHttpClient },
      ]
    });
    service = TestBed.inject(RequestHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
