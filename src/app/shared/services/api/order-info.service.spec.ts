import { TestBed } from '@angular/core/testing';

import { OrderInfoService } from './order-info.service';
import { MockRequestHelperService } from '../utils/tests/mock-request-helper-service';
import { RequestHelperService } from '../utils/request-helper.service';

describe('OrderInfoService', () => {
  let service: OrderInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderInfoService,
        { provide: RequestHelperService, useValue: new MockRequestHelperService() }
      ]
    });
    service = TestBed.inject(OrderInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
