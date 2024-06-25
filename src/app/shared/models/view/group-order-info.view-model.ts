import { OrderStatus } from "../../enums/order.status";
import { GroupOrderInfo } from "../api/group-order-info.model";
import { OrderInfoViewModel } from "./order-info.view-model";
import { MemberInfo } from "../api/member-info.model";

export class GroupOrderInfoViewModel {
  id: number;
  createdAt: string;
  hostMember: MemberInfo;
  status: OrderStatus;
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
      hostMember: data.host_member,
      status: data.status,
      actualAmount: data.actual_amount,
      orders: data.orders.map(order => OrderInfoViewModel.createFromApiModel(order))
    });
  }

  public get total(): number {
    return this.orders.reduce((total, order) => total + order.subtotal, 0);
  }

  public get totalCount(): number {
    return this.orders.reduce((total, order) => total + order.totalCount, 0);
  }
}
