import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

export class MockDialog implements Partial<jasmine.SpyObj<MatDialog>> {
  open = jasmine.createSpy('open');
  close = jasmine.createSpy('close');

  constructor(afterCloseValue?: any) {
    this.open.and.returnValue(this);
    this.close.and.returnValue({ afterClosed: () => of(afterCloseValue)});
  }
}

export class MockDialogRef<T> implements Partial<jasmine.SpyObj<MatDialogRef<T>>> {
  close = jasmine.createSpy('close');

  constructor(dialogResult?: any) {
    this.close.and.returnValue(dialogResult);
  }
}