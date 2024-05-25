export class MemberInfo {
    public id: number;
    public name: string;
    public email: string;

    constructor(data: Partial<MemberInfo>) {
        Object.assign(this, data);
    }
}