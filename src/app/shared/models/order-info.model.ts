import { OrderStatusEnum } from "../enums/order-status.enum";

export interface OrderInfo {
    id: number;
    memberId: number;
    createdAt: Date;
    isPaid: boolean;
    items: OrderItem[];
}

export interface OrderItem {
    name: string;
    unitPrice: number;
    quantity: number;
}

export class GroupOrderInfo {
    public id: number;
    public hostMemberId: number;
    public createdAt: Date;
    public orders: OrderInfo[] = [];
    public status: OrderStatusEnum = OrderStatusEnum.Draft;

    constructor(data: Partial<GroupOrderInfo>) {
        Object.assign(this, data)
    }
}