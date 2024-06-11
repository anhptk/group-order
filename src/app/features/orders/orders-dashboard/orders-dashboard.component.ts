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
import { OrderInfoViewModel } from '../../../shared/models/view/order-info.view-model';
import { ConfirmationDialogComponent } from '../../../shared/ui/confirmation-dialog/confirmation-dialog.component';
import { GroupOrderInfoService } from '../../../shared/services/api/group-order-info.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-orders-dashboard',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatButtonModule, OrdersTableComponent, MatDialogModule, CommonModule, MatIcon],
  templateUrl: './orders-dashboard.component.html',
  styleUrl: './orders-dashboard.component.scss'
})
export class OrdersDashboardComponent {
  public currentUser$: Observable<MemberInfo | null>;

  public todayOrderQuery: QueryOrderInfoParams;
  public passedOrderQuery: QueryOrderInfoParams;

  public selectedItems: Set<number> = new Set();

  public todayMenuUrl = '/';

  @ViewChild(OrdersTableComponent, { static: false }) public orderTable: OrdersTableComponent;

  constructor(
    private _appData: AppDataService,
    private _dateTimeHelper: DateTimeHelperService,
    private _dialog: MatDialog,
    private _groupOrderService: GroupOrderInfoService
  ) {
    this.currentUser$ = this._appData.currentUser$;

    this.todayOrderQuery = {
      created_at_after: this._dateTimeHelper.toDateString(new Date())
    };

    this.passedOrderQuery = {
      created_at_before: this._dateTimeHelper.toDateString(new Date())
    };
  }

  public openCreateOrderDialog(): void {
    const dialog = this._dialog.open(CreateOrderDialogComponent, { minWidth: '500px' });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.orderTable.refresh();
      }
    });
  }

  public selectItem(itemIds: Set<number>): void {
    this.selectedItems = itemIds;
  }

  public copyOrder(order: OrderInfoViewModel): void {
    const dialog = this._dialog.open(CreateOrderDialogComponent, {
      data: order
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.orderTable.refresh();
      }
    });
  }

  public createGroupOrder(): void {
    const confirmDialog = this._dialog.open(ConfirmationDialogComponent);

    confirmDialog.afterClosed().subscribe(result => {
      if (result) {
        this._groupOrderService.create({ orders: Array.from(this.selectedItems) }).subscribe(() => {
          this.orderTable.refresh();
          this.selectedItems.clear();
        });
      }
    });
  }
}
