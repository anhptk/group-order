import { OrderStatus } from "../../enums/order.status";
import { MemberInfo } from "./member-info.model";

export interface OrderInfo {
    id: number;
    created_at: string;
    is_paid: boolean;
    
    items: OrderItem[];
    ordered_by: MemberInfo;
    group_order: number;
    status: OrderStatus;
}

export interface OrderItem {
    name: string;
    unit_price: number;
    quantity: number;
    note?: string;
}

export interface CreateOrderInfoPayload {
    items: OrderItem[];
}

export interface QueryOrderInfoParams {
    member?: number;
    created_at_after?: string;
    created_at_before?: string;
    group_order?: number;
    is_paid?: boolean;
}