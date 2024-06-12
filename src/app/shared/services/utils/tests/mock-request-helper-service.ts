import { RequestHelperService } from '../request-helper.service';
import { of } from 'rxjs';

export class MockRequestHelperService implements Partial<jasmine.SpyObj<RequestHelperService>> {
  get = jasmine.createSpy<any>();
  post = jasmine.createSpy<any>();
  patch = jasmine.createSpy<any>();
  put = jasmine.createSpy<any>();
  delete = jasmine.createSpy<any>();

  constructor(data: { [key: string]: any } = {}) {
    this.get.and.returnValue(of(data['get'] || null));
    this.post.and.returnValue(of(data['post'] || null));
    this.patch.and.returnValue(of(data['patch'] || null));
    this.put.and.returnValue(of(data['put'] || null));
    this.delete.and.returnValue(of(data['delete'] || null));
  }
}