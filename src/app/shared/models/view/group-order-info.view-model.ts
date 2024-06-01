import { OrderStatusEnum } from "../../enums/order-status.enum";
import { GroupOrderInfo } from "../api/group-order-info.model";
import { OrderInfo } from "../api/order-info.model";
import { OrderInfoViewModel } from "./order-info.view-model";

export class GroupOrderInfoViewModel {
  id: number;
  createdAt: string;
  hostName: string;
  status: OrderStatusEnum;
  orderIds: number[] = [];
  orders: OrderInfoViewModel[] = [];
  actualAmount?: number;
  loading: boolean;

  constructor(data?: Partial<GroupOrderInfoViewModel>) {
    Object.assign(this, data);
  }

  public static createFromApiModel(data: GroupOrderInfo): GroupOrderInfoViewModel {
    return new GroupOrderInfoViewModel({
      id: data.id,
      createdAt: data.created_at,
      hostName: data.host_member.name,
      status: data.status,
      orderIds: data.orders,
      actualAmount: data.actual_amount
    });
  }

  public setOrders(orders: OrderInfo[]) {
    this.orders = orders.map(order => OrderInfoViewModel.createFromApiModel(order));
  }

  public get total(): number {
    return this.orders.reduce((total, order) => total + order.subtotal, 0);
  }

  public get totalCount(): number {
    return this.orders.reduce((total, order) => total + order.totalCount, 0);
  }
}