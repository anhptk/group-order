import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';
import { RequestHelperService } from '../../shared/services/utils/request-helper.service';
import { MockRequestHelperService } from '../../shared/services/utils/tests/mock-request-helper-service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TransactionsComponent
      ],
      providers: [
        { provide: RequestHelperService, useValue: new MockRequestHelperService() }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
