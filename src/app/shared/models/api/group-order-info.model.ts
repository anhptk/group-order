import { OrderStatusEnum } from "../../enums/order-status.enum";
import { MemberInfo } from "./member-info.model";
import { OrderInfo } from "./order-info.model";

export class GroupOrderInfo {
  public id: number;
  public createdAt: string;
  public orders: OrderInfo[] = [];
  public status: OrderStatusEnum = OrderStatusEnum.Draft;
  public actualAmount?: number;

  public hostMember: MemberInfo;

  constructor(data: Partial<GroupOrderInfo>) {
    Object.assign(this, data)
  }
}

export interface CreateGroupOrderInfoPayload {
  orderIds: number[];
}

export interface QueryGroupOrderInfoParams {
  hostMemberId?: number;
  minCreatedDate?: string;
  maxCreatedDate?: string;
  status?: OrderStatusEnum;
}

export interface CompleteGroupOrderInfoPayload {
  orderIds?: number[];
  actualAmount?: number;
}