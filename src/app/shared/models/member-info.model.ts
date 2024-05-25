import { GroupOrderInfo } from "./group-order-info.model";
import { OrderInfo } from "./order-info.model";

export class MemberInfo {
    public id: number;
    public name: string;
    public email: string;

    constructor(data: Partial<MemberInfo>) {
        Object.assign(this, data);
    }
}