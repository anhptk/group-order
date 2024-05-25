import { TestBed } from '@angular/core/testing';

import { OrderInfoService } from './order-info.service';

describe('OrderInfoService', () => {
  let service: OrderInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
