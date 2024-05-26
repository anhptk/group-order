import { Component, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { OrdersTableComponent } from '../orders-table/orders-table.component';
import { QueryOrderInfoParams } from '../../../shared/models/api/order-info.model';
import { MemberInfo } from '../../../shared/models/api/member-info.model';
import { AppDataService } from '../../../shared/services/auth/app-data.service';
import { DateTimeHelperService } from '../../../shared/services/utils/date-time-helper.service';
import { CreateOrderDialogComponent } from '../create-order-dialog/create-order-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-orders-dashboard',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatButtonModule, OrdersTableComponent, MatDialogModule],
  templateUrl: './orders-dashboard.component.html',
  styleUrl: './orders-dashboard.component.scss'
})
export class OrdersDashboardComponent {
  public currentUser: MemberInfo | null = null;
  public todayOrderQuery: QueryOrderInfoParams;
  public passedOrderQuery: QueryOrderInfoParams;

  @ViewChild(OrdersTableComponent, {static: false}) public orderTable: OrdersTableComponent;

  constructor(
    private _appData: AppDataService,
    private _dateTimeHelper: DateTimeHelperService,
    private _dialog: MatDialog
  ) {
    this.todayOrderQuery = {
      created_at_after: this._dateTimeHelper.toDateString(new Date())
    };

    this.passedOrderQuery = {
      created_at_before: this._dateTimeHelper.toDateString(new Date())
    };
  }

  public ngOnInit(): void {
    this._appData.currentUser$.subscribe(user => this.currentUser = user);
  }

  public openCreateOrderDialog(): void {
    const dialog = this._dialog.open(CreateOrderDialogComponent);

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.orderTable.refresh();
      }
    });
  }
}
