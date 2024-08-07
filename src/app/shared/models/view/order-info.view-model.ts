import { OrderStatus } from "../../enums/order.status";
import { MemberInfo } from "../api/member-info.model";
import { OrderInfo, OrderItem } from "../api/order-info.model";

export class OrderInfoViewModel {
    id: number;
    createdAt: Date;
    isPaid: boolean;
    
    items: OrderItem[];
    orderedBy: MemberInfo;
    groupOrderId: number;
    status: OrderStatus;

    constructor(data?: Partial<OrderInfoViewModel>) {
        Object.assign(this, data);
    }

    public static createFromApiModel(data: OrderInfo): OrderInfoViewModel {
        return new OrderInfoViewModel({
            id: data.id,
            createdAt: new Date(data.created_at),
            isPaid: data.is_paid,
            items: data.items,
            orderedBy: data.ordered_by,
            groupOrderId: data.group_order,
            status: data.status
        });
    }

    public get subtotal(): number {
        return this.items.reduce((total, item) => total + item.unit_price * item.quantity, 0);
    }

    public get totalCount(): number {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
}