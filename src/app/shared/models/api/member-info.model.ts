export class MemberInfo {
    public id: number;
    public name: string;
    public email: string;
    public balance: number;
    public picture: string;

    constructor(data: Partial<MemberInfo>) {
        Object.assign(this, data);
    }
}

export interface UpdateMemberPayload {
    name?: string;
    picture?: string;
}