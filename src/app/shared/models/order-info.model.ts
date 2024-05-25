import { MemberInfo } from "./member-info.model";

export interface OrderInfo {
    id: number;
    createdAt: string;
    isPaid: boolean;
    items: OrderItem[];
    orderedBy: MemberInfo;
}

export interface OrderItem {
    name: string;
    unitPrice: number;
    quantity: number;
    note?: string;
}

export interface CreateOrderInfoPayload {
    items: OrderItem[];
}

export interface QueryOrderInfoParams {
    memberId?: number;
    minCreatedDate?: string;
    maxCreatedDate?: string;
    groupOrderId?: string;
    isPaid?: boolean;
}