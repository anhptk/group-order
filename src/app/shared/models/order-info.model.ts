import { OrderStatusEnum } from "../enums/order-status.enum";

export interface OrderInfo {
    id: number;
    memberId: number;
    createdAt: string;
    isPaid: boolean;
    items: OrderItem[];
    status: OrderStatusEnum;
    groupOrderId?: number;
}

export interface OrderItem {
    name: string;
    unitPrice: number;
    quantity: number;
}

export interface CreateOrderInfoPayload {
    memberId: number;
    items: OrderItem[];
}

export interface QueryOrderInfoParams {
    memberId?: number;
    minCreatedDate?: string;
    maxCreatedDate?: string;
    groupOrderId?: string;
    isPaid?: boolean;
}