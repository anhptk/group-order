import { GroupOrderInfo, OrderInfo } from "./order-info.model";

export class MemberInfo {
    public id: number;
    public name: string;
    public isActive: boolean = true;
    public orders?: OrderInfo[] = [];
    public hostedGroupOrders?: GroupOrderInfo[] = [];

    constructor(data: Partial<MemberInfo>) {
        Object.assign(this, data);
    }
}