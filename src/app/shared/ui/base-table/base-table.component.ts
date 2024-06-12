import { Component, signal, ViewChild } from '@angular/core';
import { DEFAULT_PAGINATOR_PAGE_SIZE, PAGINATOR_SIZE_OPTIONS } from '../../constants/paginator.constant';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-base-table',
  standalone: true,
  template: ''
})
export abstract class BaseTableComponent<T> {
  protected abstract _queryRequest: () => Observable<T[]>;

  public readonly PAGINATOR_SIZE_OPTIONS = PAGINATOR_SIZE_OPTIONS;
  public readonly DEFAULT_PAGINATOR_PAGE_SIZE = DEFAULT_PAGINATOR_PAGE_SIZE

  public dataSource = new MatTableDataSource<T>([]);

  public isLoading = signal(true);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData(): void {
    this.isLoading.set(true);

    this._queryRequest()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe((data: T[]) => {
      this.dataSource.data = data;
      this._setupTableSorts();
    });
  }

  private _setupTableSorts() {
    // wait for child components rendered
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  public refresh(): void {
    this._fetchData();
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
