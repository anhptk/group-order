import { OrderStatusEnum } from "../enums/order-status.enum";
import { OrderInfo } from "./order-info.model";

export class GroupOrderInfo {
    public id: number;
    public hostMemberId: number;
    public createdAt: string;
    public orders: OrderInfo[] = [];
    public status: OrderStatusEnum = OrderStatusEnum.Draft;
    public actualAmount?: number;

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