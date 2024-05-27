import { OrderStatusEnum } from "../../enums/order-status.enum";
import { MemberInfo } from "./member-info.model";
import { OrderInfo } from "./order-info.model";

export class GroupOrderInfo {
  public id: number;
  public created_at: string;
  public orders: OrderInfo[] = [];
  public status: OrderStatusEnum = OrderStatusEnum.Draft;
  public actual_amount?: number;

  public host_member: MemberInfo;

  constructor(data: Partial<GroupOrderInfo>) {
    Object.assign(this, data)
  }
}

export interface CreateGroupOrderInfoPayload {
  orders: number[];
}

export interface QueryGroupOrderInfoParams {
  host_member?: number;
  created_at_after?: string;
  created_at_before?: string;
  status?: OrderStatusEnum;
}

export interface CompleteGroupOrderInfoPayload {
  orders?: number[];
  actual_amount?: number;
}